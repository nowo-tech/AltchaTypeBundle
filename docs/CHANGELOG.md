# Changelog

## [Unreleased]

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

[Unreleased]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.0.3...v1.1.0
[1.0.3]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/nowo-tech/AltchaTypeBundle/releases/tag/v1.0.0
