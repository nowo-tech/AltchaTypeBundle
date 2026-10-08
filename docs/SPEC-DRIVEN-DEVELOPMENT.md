# Spec-driven development (REQ-DOCS-013)

## Table of contents

- [Three layers in sync](#three-layers-in-sync)
- [User stories](#user-stories)
- [Bundle functional scope](#bundle-functional-scope)
- [Validating the functional spec](#validating-the-functional-spec)
- [Requirement identifiers (`REQ-*`)](#requirement-identifiers-req-)
- [Suggested workflow for contributors](#suggested-workflow-for-contributors)
- [Relationship to Engram](#relationship-to-engram)
- [GitHub Spec Kit](#github-spec-kit)
- [See also](#see-also)

## Three layers in sync

Keep these three layers in sync in every pull request:

1. **GitHub Spec Kit baseline** — [`specs/001-baseline/spec.md`](../specs/001-baseline/spec.md) (US / FR / SC) and [`code-inventory.md`](../specs/001-baseline/code-inventory.md) (one row per production unit). Manual: [SPEC-KIT.md](SPEC-KIT.md).
2. **Product behaviour** — what consuming applications may rely on: [USAGE.md](USAGE.md), [CONFIGURATION.md](CONFIGURATION.md), [SECURITY.md](SECURITY.md).
3. **Traceability anchors** — stable `REQ-*` identifiers in Makefiles, scripts, CI and comments, so issues and PRs can cite tooling behaviour.

## User stories

| ID | Intent | Functional scope | Integrator docs |
| --- | --- | --- | --- |
| US-01 | As a site owner, I protect a contact form so bots must solve a proof-of-work before the message is accepted. | `AltchaType`, `AltchaValid`, verifier | [USAGE](USAGE.md#form-field) |
| US-02 | As a developer, I pick a difficulty profile per form and a cheaper challenge cannot be reused on an expensive form. | Profiles, signed `data.profile` | [CONFIGURATION](CONFIGURATION.md#profiles) |
| US-03 | As a developer, a solved payload cannot be replayed to send many submissions. | `replay_protection` | [CONFIGURATION](CONFIGURATION.md#replay-protection) |
| US-04 | As a tester, I disable verification in `when@test`. | `enable: false` | [CONFIGURATION](CONFIGURATION.md#options) |
| US-05 | As an operator, I verify through ALTCHA Sentinel without opening a bypass. | `sentinel.*` | [CONFIGURATION](CONFIGURATION.md#sentinel) |
| US-06 | As a frontend developer, I use the built script or my own Stimulus/Vite pipeline. | `include_script`, `use_stimulus`, controller | [USAGE](USAGE.md#stimulus-optional) |

## Bundle functional scope

**Goal:** a drop-in, privacy-friendly anti-spam field for Symfony forms using self-hosted ALTCHA proof-of-work.

**In scope**

- Public challenge endpoint `GET /_nowo/altcha/challenge` (attribute route `nowo_altcha_type_challenge`), HMAC-signed, expiring, profile-bound challenges.
- `AltchaType` form field, `AltchaValid` constraint, `AltchaVerifier` service (size limit, expiry, profile, single use, fail closed).
- Optional Sentinel remote verification (final verdict, opt-in local fallback on transport errors).
- Twig form themes for 11 Symfony layouts, IIFE script + Stimulus controller (ALTCHA v3 widget), named asset package `nowo_altcha_type`.
- Translations (`NowoAltchaTypeBundle`, 7 locales), Flex recipe.

**Explicit non-goals**

- Rate limiting the challenge endpoint (host concern).
- A custom widget UI, code challenges, or ALTCHA obfuscation plugins.
- Storing user data or setting cookies.

**Not part of the Packagist API:** `demo/` (excluded via `archive.exclude`), `.cursor/`, `.specify/`, CI workflows.

## Validating the functional spec

```bash
make release-check          # CS, Rector, PHPStan, Igor, PHP coverage 100%, Vitest 100%, demos
make -C demo/symfony8 test-e2e
```

Every behaviour change requires tests under `tests/` (PHPUnit) or co-located `*.test.ts` (Vitest); demo-visible behaviour also needs a Playwright check in `demo/symfony8/e2e/`.

## Requirement identifiers (`REQ-*`)

| ID | Location | Meaning |
| --- | --- | --- |
| REQ-CFG-001 | `src/DependencyInjection/Configuration.php` | `default_profile` + `profiles` |
| REQ-SF-006 | `Configuration.php` | Strict tree, bounded values |
| REQ-ASSETS-004 | `AltchaTypeExtension::prepend()`, `NowoAltchaTypeTwigExtension` | Named asset package |
| REQ-RUNTIME-001 | `Configuration.php` (`sentinel.timeout/retries`), [CONFIGURATION](CONFIGURATION.md#timeouts-frankenphp--php-fpm) | Bounded outbound I/O |
| REQ-TWIG-003 / REQ-TWIG-005 | Demo templates, `make check-no-raw-html-form` | Child-loop rendering, no raw form tags |
| REQ-I18N-002 / REQ-I18N-003 | `src/Resources/translations/`, `make validate-translations` | 7 locales, domain `NowoAltchaTypeBundle` |
| REQ-UX-001 | `src/Resources/assets/controllers/altcha_type_controller.ts` | Stimulus controller |
| REQ-SEC-005 | [SECURITY](SECURITY.md#scope) | **N/A** — form widget only; host form owns CSRF |
| REQ-MAKE-002 | `Makefile` (`release-check`) | Full QA chain |
| REQ-CS-008 | `igor.json`, `make igor` | Worker-state audit |
| REQ-DEMO-013 | `demo/symfony8/e2e/` | Playwright e2e + screenshots |
| REQ-GIT-001 | `.githooks/commit-msg`, `make check-no-cursor-coauthor` | No Cursor co-author trailers |

When scripted behaviour changes, update the matching `REQ-*` comment and this table (or add a new ID).

## Suggested workflow for contributors

1. **Clarify** the behaviour in an issue (cite `US-*` / `FR-*`).
2. **Update the spec** (`specs/001-baseline/spec.md`, and `code-inventory.md` for new or removed files under `src/`).
3. **Implement with tests** (PHPUnit / Vitest / Playwright).
4. **Anchor** scripts and Makefile targets with `REQ-*` comments.
5. **Document** integrator-facing changes (USAGE, CONFIGURATION, CHANGELOG, UPGRADING).
6. Run `make release-check`.

## Relationship to Engram

[ENGRAM.md](ENGRAM.md) covers the developer's **local, cross-session memory** (MCP). This document and `specs/` are the **committed, reviewable** source of truth. Never store product decisions only in Engram; summarize them here or in the baseline spec.

## GitHub Spec Kit

The repository is initialized with GitHub Spec Kit (`.specify/`, `.cursor/skills/speckit-*`). Full manual: [SPEC-KIT.md](SPEC-KIT.md). Baseline: [`specs/001-baseline/`](../specs/001-baseline/).

Contributor rule: any added, removed or renamed file under `src/` must be reflected in `code-inventory.md` (with its `FR-*` IDs) in the same pull request; new features start as `specs/00N-<feature>/` via `/speckit.specify`.

## See also

- [SPEC-KIT.md](SPEC-KIT.md) · [`specs/001-baseline/`](../specs/001-baseline/)
- [USAGE.md](USAGE.md) · [CONFIGURATION.md](CONFIGURATION.md) · [SECURITY.md](SECURITY.md)
- [CONTRIBUTING.md](CONTRIBUTING.md) · [RELEASE.md](RELEASE.md)
- [DEMO-FRANKENPHP.md](DEMO-FRANKENPHP.md) · [demo/README.md](../demo/README.md)
