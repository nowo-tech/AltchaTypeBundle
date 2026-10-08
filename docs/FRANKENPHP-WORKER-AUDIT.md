# FrankenPHP worker audit

This bundle is **FrankenPHP worker mode friendly**.

## Findings

- Bundle extension is constructed once in `NowoAltchaTypeBundle::__construct` (no request-scoped mutation).
- Services (`AltchaClientFactory`, `AltchaChallengeFactory`, `AltchaVerifier`, profile registry) are stateless per request; no static mutable caches.
- Challenge endpoint returns a fresh signed challenge each GET. Replay protection stores used challenges in an injected PSR-6 pool (`cache.app` by default), never in process memory, so it is shared across workers.
- `AltchaChallengeFactory` and `AltchaVerifier` use an injected PSR-20 clock; the Sentinel `TransportTrackingHttpClient` is created per verification (and implements `ResetInterface`).
- No `pcntl_fork`, long-lived sockets, or kernel-reset anti-patterns in `src/`.

See also Igor (`composer igor` / REQ-CS-008) and `nowo-tech/phpstan-frankenphp` rules (REQ-CS-005).
