# Changelog

## [Unreleased]

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

[Unreleased]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/nowo-tech/AltchaTypeBundle/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/nowo-tech/AltchaTypeBundle/releases/tag/v1.0.0
