# Upgrading

## Table of contents

- [Unreleased](#unreleased)
- [To 1.2.1](#to-121)
- [1.2.0](#120)
- [1.1.0](#110)
- [1.0.3](#103)
- [1.0.2](#102)
- [1.0.1](#101)
- [1.0.0](#100)

## Unreleased

## To 1.2.1

From **1.2.0**:

```bash
composer update nowo-tech/altcha-type-bundle
```

## 1.2.0

From **1.1.0** — atomic replay check with Symfony Lock, Sentinel profile binding, vitest 4.

```bash
composer update nowo-tech/altcha-type-bundle
```

- **Replay lock:** when `symfony/lock` is installed and a `lock.factory` service exists, the replay check now acquires a short per-challenge lock (blocking). On several hosts configure a shared lock store, or set `replay_protection.lock_factory: null` to keep the previous best-effort behaviour.
- **Sentinel:** with `sentinel.enabled`, payloads whose challenge was signed for another profile than the form field's are rejected before Sentinel is called (previously only local verification checked it).

## 1.1.0

From **1.0.3** — require Symfony 6.4 as the minimum version.

```bash
composer update nowo-tech/altcha-type-bundle
```

- Symfony 6.4 is the minimum (the code already needed it).

## 1.0.3

From **1.0.2** — dependency refresh and repository maintenance.

```bash
composer update nowo-tech/altcha-type-bundle
```

- No breaking changes. No application upgrade steps.

## 1.0.2

No action required. With `include_script: true` the bundle's script tag now emits `nonce` from the request attribute `csp_nonce` (see [Security — Content Security Policy](SECURITY.md#content-security-policy)). If you load `altcha-type.js` yourself (`include_script: false`) or through Stimulus, give that script the nonce or add `<meta name="csp-nonce" content="…">` so the injected widget `<style>` is allowed.

## 1.0.1

```bash
composer update nowo-tech/altcha-type-bundle
```

No breaking changes. No application upgrade steps.

## 1.0.0

Initial public release — no upgrade path yet.

Notes for early adopters of pre-release snapshots:

- The YAML route file `Resources/config/routes.yaml` was replaced by attribute routes: import `resource: '@NowoAltchaTypeBundle/Controller/'` with `type: attribute` (same route name and path).
- The unused `translation_domain` option was removed; the domain is always `NowoAltchaTypeBundle`.
- Per-field `cost`, `counter_min`, `counter_max`, `timeout` and `expires` form options were removed; set them in a profile.
- The widget requires the ALTCHA **v3** web component (npm `altcha` ^3.2) when you bundle it yourself.
