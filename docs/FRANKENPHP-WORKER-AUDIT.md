# FrankenPHP worker audit

This bundle is **FrankenPHP worker mode friendly**. Version `v1.2.4`, re-checked 2026-11-12.

## Findings

- Bundle extension is constructed once in `NowoAltchaTypeBundle::__construct` (no request-scoped mutation).
- Services (`AltchaClientFactory`, `AltchaChallengeFactory`, `AltchaVerifier`, profile registry) are stateless per request; no static mutable caches.
- Challenge endpoint returns a fresh signed challenge each GET. Replay protection stores used challenges in an injected PSR-6 pool (`cache.app` by default), never in process memory, so it is shared across workers.
- `AltchaChallengeFactory` and `AltchaVerifier` use an injected PSR-20 clock; the Sentinel `TransportTrackingHttpClient` is created per verification (and implements `ResetInterface`).
- No `pcntl_fork`, long-lived sockets, or kernel-reset anti-patterns in `src/`.

## Kept-alive kernel test

The bundle is **safe with kernel reset false**: no shared service keeps request data; replay protection lives in the injected PSR-6 pool.

`tests/Integration/Worker/WorkerKeptAliveKernelTest::testFormRenderAndSubmitInOneKernelWithoutResetCarriesNoStateAndKeepsMemoryFlat` (REQ-RUNTIME-002) boots ONE kernel (FrameworkBundle, TwigBundle and this bundle, host kernel in `tests/Fixtures/Worker/`) and never calls `services_resetter` or `kernel.reset`. Through `http_kernel` (`handle()` + `terminate()`) it fetches signed challenges from the bundle controller, solves them, renders (GET) and submits (POST) a host form with an `AltchaType` field, and re-submits the same payload 1000 times (6 requests per iteration: 2 challenges, 1 GET, 3 POSTs), alternating two inputs (two profiles with different algorithm parameters, floating and logo options, locales `en` / `es`). Every response must contain only its own profile and verdict, a solved challenge verifies exactly once (replay state is in the PSR-6 pool, not in process memory), and a payload signed for the other profile is rejected. Memory growth after a 100-iteration warm-up must stay under 4 MiB.

Rule 7 (host entity manager): the bundle has no persistence and never flushes or clears an entity manager; a host must never clear the default entity manager from a reset hook for this bundle's sake.

See also Igor (`composer igor` / REQ-CS-008) and `nowo-tech/phpstan-frankenphp` rules (REQ-CS-005).
