# Changelog

## [Unreleased]

### Added

- Initial release: `AltchaType` FormType, attribute-routed challenge endpoint (`nowo_altcha_type_challenge`), named profiles, Twig themes for 11 Symfony layouts, Stimulus controller + IIFE assets (ALTCHA v3 widget), optional Sentinel verification.
- Single-use payloads (`replay_protection`, PSR-6 pool), profile signed into each challenge and enforced by `AltchaValid`.
- Strict configuration: bounded `cost` / counters / `expires`, `https://` Sentinel URL, bounded Sentinel timeouts, closed `form_theme` list.
- Flex recipe with a generated `ALTCHA_HMAC_SIGNATURE`.
