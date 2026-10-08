# PHP-FIG PSR evaluation (REQ-CS-007)

Package: `nowo-tech/altcha-type-bundle` (`symfony-bundle`)

This document records which [PHP-FIG PSRs](https://www.php-fig.org/psr/) apply to this package.
Only contracts that add clear interoperability or maintainability value are **Adopted**.
Others are **N/A** (or already covered by Symfony) so the decision stays auditable.

## Baseline (always)

| PSR | Decision | How |
| --- | -------- | --- |
| PSR-12 (coding style) | **Adopted** | `@PSR12` in `.php-cs-fixer.dist.php` (Nowo REQ-CS-001). |
| PSR-4 (autoloading) | **Adopted** | `composer.json` `autoload` / `autoload-dev` PSR-4 map for package sources and tests. |

## Interface / contract PSRs

| PSR | Decision | Notes |
| --- | -------- | ----- |
| PSR-3 Logger | **Adopted** | `AltchaVerifier` takes an optional `Psr\Log\LoggerInterface` (autowired); no payloads or secrets are logged. `psr/log` in `require`. |
| PSR-6 Cache | **Adopted** | Replay protection stores used challenges in a `Psr\Cache\CacheItemPoolInterface` (`replay_protection.cache_pool`, default `cache.app`). `psr/cache` in `require`. |
| PSR-16 Simple cache | **N/A** | PSR-6 pool is enough (TTL per item). |
| PSR-7 / PSR-17 HTTP messages | **N/A** | Symfony Form / HttpFoundation only. |
| PSR-18 HTTP client | **N/A** | The only outbound HTTP (optional Sentinel) is delegated to the altcha-org `HttpClientInterface` SPI (`TransportTrackingHttpClient` decorator); timeouts bounded per REQ-RUNTIME-001. |
| PSR-11 Container | **N/A** | Constructor injection only. |
| PSR-14 Event dispatcher | **N/A** | Browser `CustomEvent` only; no PHP dispatcher SPI. |
| PSR-15 HTTP middleware | **N/A** | No HTTP middleware. |
| PSR-20 Clock | **Adopted** | `AltchaChallengeFactory` (challenge expiry) and `AltchaVerifier` (replay TTL) take an optional `Psr\Clock\ClockInterface` (autowired `clock` service, `NativeClock` fallback). `psr/clock` + `symfony/clock` in `require`. |

## Summary

- **Adopted beyond baseline:** PSR-3 (logging), PSR-6 (replay cache), PSR-20 (clock).
- **Rule:** do not add `psr/*` Composer dependencies without matching type-hints and DI wiring.
- **Re-evaluate** when the package gains logging, HTTP, cache, clock, or event SPIs.

---

_REQ-CS-007 evaluation date: 2026-10-08._
