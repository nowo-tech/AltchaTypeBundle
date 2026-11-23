# Changelog

## Table of contents

- [[Unreleased]](#unreleased)
- [[1.4.1] - 2026-11-19](#141---2026-11-19)
- [[1.4.0] - 2026-11-19](#140---2026-11-19)
- [[1.3.0] - 2026-11-13](#130---2026-11-13)
- [[1.2.4] - 2026-10-30](#124---2026-10-30)
- [[1.2.3] - 2026-10-25](#123---2026-10-25)
- [[1.2.2] - 2026-10-20](#122---2026-10-20)
- [[1.2.1] - 2026-10-20](#121---2026-10-20)
- [[1.2.0] - 2026-10-13](#120---2026-10-13)
- [[1.1.0] - 2026-10-13](#110---2026-10-13)
- [[1.0.3] - 2026-10-13](#103---2026-10-13)
- [[1.0.2] - 2026-10-09](#102---2026-10-09)
- [[1.0.1] - 2026-10-09](#101---2026-10-09)
- [[1.0.0] - 2026-10-08](#100---2026-10-08)

## [Unreleased]

### Changed

- Demo: runs in UiKit's demo platform shell (`nowo-tech/ui-kit-bundle` ^2.60); the demo's own header is gone and the pages use the shell page headers and section cards. The `?case=` query became the path `/{locale}/{case}` (the old URL redirects with a 301); the widget stylesheet is the bundle's own asset. Demo only, no bundle change.

### Added

- **Console**: `altcha-type.js` (once per page, although the widget template emits the script once per field; the existing `getLogger()` / `setAltchaTypeDebug()` logger is now the house `createBundleLogger`, and debug output uses the `[altcha-type]` prefix) logs one line on load, `📦 [altcha-type] script loaded, build: 2026-11-23 14:05 UTC`, with the house `createBundleLogger`. The build time is read from the committed `build-info.json` (`{sourceHash, builtAt}`): it is reused while the sources are unchanged and renewed only when they change, so rebuilding unchanged sources never rewrites the committed assets (no wall-clock stamp, no user data). Quiet switch: `<html data-nowo-console="quiet">` or `globalThis.NOWO_CONSOLE = 'quiet'` prints nothing; the default is unchanged.

## [1.4.1] - 2026-11-19

### Fixed

- A cache pool that throws during the replay check (custom PSR-6 pool, `Psr\Cache\InvalidArgumentException`) now rejects the payload with a warning (fail closed) instead of a 500.

### Changed

- Docs: the replay lock wait is bounded by the TTL only with expiring stores (Redis, DBAL, PDO); `FlockStore` and `SemaphoreStore` block until release. Docs and README state that without `symfony/lock` the replay check is best effort by default and recommend `require_lock: true`. UPGRADING notes that any pool whose `save()` returns false rejects every submission.

## [1.4.0] - 2026-11-19

### Added

- `replay_protection.require_lock` (default `false`): the container fails to build when replay protection is on and the lock factory service does not exist. Without it a warning is written to the container compiler log, and each best-effort check logs a debug line (REQ-RUNTIME-003).
- `docs/CONCURRENCY.md`: write-path table, lock store and cache pool requirements for multi-server deploys, residual risks (REQ-RUNTIME-003).
- Race tests with real OS processes (`tests/Integration/Race`): a shared lock store lets exactly one of four concurrent submissions of one payload pass; a local lock store per server and the best-effort mode let both pass (documented).
- CI: demo lock check (`.scripts/check-demo-lock.py`): each `demo/*/composer.lock` must satisfy the bundle's own requirements.
- Dev: `symfony/process` in `require-dev` (race-test workers with a hard timeout).

### Changed

- Replay check fails closed: an unreachable lock store rejects the payload (it used to throw), and a cache pool that cannot record the use rejects it (it used to accept it unrecorded). A failed lock release is logged and keeps the verdict (the lock is created with `autoRelease: false`, so its destructor no longer releases it a second time).

- docs: demo screenshots regenerated on the UiKit base style
- demo: opt into UiKit 2.51 `nowo_ui_kit.base_stylesheet`, use `nowo-ui-header__nav` for the masthead nav, screenshots regenerated with the themed shell
- Spec Kit: `specs/001-baseline/code-inventory.md` maps the two 1.3.0 service interfaces (46/46 production units) (REQ-SPECKIT-001/003)
- CI: Dependabot npm updates for `demo/symfony8` and `demo/symfony8/e2e` (REQ-GH-002)

## [1.3.0] - 2026-11-13

### Added

- **Interfaces (REQ-ARCH-001 rule 1):** `Service\AltchaVerifierInterface` and `Service\AltchaChallengeFactoryInterface` (the factory port is `createArray()` only: no vendor type; `create()` stays on the class). `AltchaVerifier` and `AltchaChallengeFactory` implement them, both interfaces are aliased in the container, and the validator and challenge controller type-hint the interfaces. A host can override the alias. Strictly additive; the class service ids and defaults are unchanged.

### Changed

- Demo uses the UiKit base style and FormKit forms (REQ-DEMO-014/015)

### Fixed

- Demo forms render a CSRF token

### Documentation

- Tests (REQ-RUNTIME-002): `WorkerKeptAliveKernelTest` renders and submits a host form 1000 times in ONE kernel without any reset, alternating two inputs and locales, and asserts no state carries over and flat memory. `docs/FRANKENPHP-WORKER-AUDIT.md` refreshed (version, test, reset-false statement, rule 7).
- USAGE: new section "Using it from a DDD / hexagonal application" (standard vs DDD path, verify once at the edge, own port wrapping the verifier, known limitations).

## [1.2.4] - 2026-10-30

Security: bundle routes are opt-in again; controllers are no longer autoconfigured, so a host's routing.controllers import does not expose them (REQ-SF-004 rule 7). See [UPGRADING](UPGRADING.md#to-124).

### Security

- **Challenge endpoint registered without being imported (REQ-SF-004 rule 7):** `AltchaChallengeController` was autoconfigured (and carried `#[AsController]`), so on Symfony >= 7.3 its `#[Route]` tagged it `routing.controller` and a host's default `controllers: { resource: routing.controllers }` exposed the unauthenticated `GET /_nowo/altcha/challenge` even when the host never imported the bundle controllers. The service is no longer autoconfigured (explicit `controller.service_arguments` tag, no `#[AsController]`): the route exists only where the host imports `@NowoAltchaTypeBundle/Controller/` (`type: attribute`, as the Flex recipe does). Regression test with a kernel whose routing is only `routing.controllers`.

## [1.2.3] - 2026-10-25

Reproducible JS bundle: the build stamp is a hash of the sources instead of the build time. See [UPGRADING](UPGRADING.md#to-123).

### Changed

- **Assets:** reproducible bundle build. `__ALTCHA_TYPE_BUILD_TIME__` now holds a build id (a hash of the TypeScript/CSS sources and `pnpm-lock.yaml`) instead of the build time, so rebuilding unchanged sources (`make assets`, `make release-check`) no longer rewrites the committed JS (the `boot` debug log carries the id).

## [1.2.2] - 2026-10-20

Makefile help order, demo FrankenPHP timeout hierarchy, worktree-safe co-author check. See [UPGRADING](UPGRADING.md#to-122).

### Changed

- Makefile `help` lists the targets in the canonical block order (Container → Dependencies → Assets → Tests → Quality → Release → Cleanup → Composer → Demos) (REQ-MAKE-001).
- Demo FrankenPHP Caddyfiles (worker and classic) set the timeout hierarchy: PHP `max_execution_time` 45 s < Caddy write timeout 60 s, `max_wait_time` 30 s; documented in `docs/DEMO-FRANKENPHP.md` (REQ-RUNTIME-001).

### Fixed

- `.scripts/check-no-cursor-coauthor.sh` also runs inside git worktrees (`.git` file instead of directory).

## [1.2.1] - 2026-10-20

Dependency refresh (bundle and demos), php-cs-fixer ParallelConfig(2). See [UPGRADING](UPGRADING.md#to-121).

### Changed

- Dependencies refreshed (Composer and pnpm/npm lock files of the bundle and its demos, campaign 2026-10-19); shipped assets rebuilt.
- `.php-cs-fixer.dist.php`: `new ParallelConfig(2)` (REQ-CS-001).
- Documentation: wave-1 REQ compliance — issue templates aligned with the canonical text (package name placeholder), CONTRIBUTING states the post-release-commit `check-no-cursor-coauthor` run.

## [1.2.0] - 2026-10-13

### Security

- **Replay check atomicity**: `AltchaVerifier` runs the replay-cache read and write under a Symfony Lock when a lock factory is available (new `replay_protection.lock_factory`, default `lock.factory`, ignored when the service does not exist). Without it the check is documented as best-effort.
- **Sentinel profile binding**: the Sentinel verification path now enforces the profile signed into the challenge (when the payload carries one), like local verification. A payload solved for a cheaper profile is no longer forwarded to Sentinel for a field that expects another profile.

### Changed

- Dev: Vitest and `@vitest/coverage-v8` `^4.1.11` (was `^3.2.6`); extra controller test keeps 100% branch coverage under Vitest 4. `symfony/lock` added to `require-dev` and `suggest`.

## [1.1.0] - 2026-10-13

### Changed

- Minimum Symfony version raised from 6.0 to **6.4** (`^6.4 || ^7.0 || ^8.0`, including `symfony/clock`). The code already relied on Symfony 6.3/6.4 APIs, so installs on 6.0–6.3 could resolve but not run. CI now also tests Symfony 6.4.

## [1.0.3] - 2026-10-13

### Dependencies

- `vite` 8.3.2 → 8.3.4 (frontend tooling; #3).

## [1.0.2] - 2026-10-09

### Changed

- CSP: with `include_script: true` the widget's `<script src="altcha-type.js">` now carries `nonce="…"` from the request attribute `csp_nonce` when it is set, so the ALTCHA library copies it (`document.currentScript.nonce`) onto the `<style id="altcha-css">` it injects at load — the widget is styled under `style-src-elem 'nonce-…'`. Added render tests for the nonce and a template scan test (inline blocks must declare the nonce; no inline event handlers).

## [1.0.1] - 2026-10-09

### Changed

- Rebuilt the shipped IIFE asset (`src/Resources/public/altcha-type.js`) with Vite 8; no source change.

### Dependencies

- Dev toolchain: Vite 6.4.4 -> 8.3.2, TypeScript 5.9.3 -> 7.0.2 (Dependabot).
- Dev: `phpstan/phpstan` 2.3.0 -> 2.3.1.
- Demo `composer.lock`: refreshed path-repository reference and extension suggestions (`ext-sodium`, `ext-scrypt`).

## [1.0.0] - 2026-10-08

### Added

- Initial release: `AltchaType` FormType, attribute-routed challenge endpoint (`nowo_altcha_type_challenge`), named profiles, Twig themes for 11 Symfony layouts, Stimulus controller + IIFE assets (ALTCHA v3 widget), optional Sentinel verification.
- Single-use payloads (`replay_protection`, PSR-6 pool), profile signed into each challenge and enforced by `AltchaValid`.
- Strict configuration: bounded `cost` / counters / `expires`, `https://` Sentinel URL, bounded Sentinel timeouts, closed `form_theme` list.
- Flex recipe with a generated `ALTCHA_HMAC_SIGNATURE`.
- ALTCHA v3 key-derivation algorithms per profile: `PBKDF2` (default), `SHA`, `ARGON2ID` (`ext-sodium`), `SCRYPT` (`ext-scrypt`), with bounded `cost` / `memory_cost` / `parallelism`; Argon2id/Scrypt widget workers published under `public/workers/`.

[Unreleased]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.4.1...HEAD
[1.4.1]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.2.4...v1.3.0
[1.2.4]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.2.3...v1.2.4
[1.2.3]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.0.3...v1.1.0
[1.0.3]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/nowo-tech/AltchaTypeBundle/releases/tag/v1.0.0
