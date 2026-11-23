# Upgrading

## Table of contents

- [Unreleased](#unreleased)
- [To 1.5.0](#to-150)
- [To 1.4.1](#to-141)
- [To 1.4.0](#to-140)
- [To 1.3.0](#to-130)
- [To 1.2.4](#to-124)
- [To 1.2.3](#to-123)
- [To 1.2.2](#to-122)
- [To 1.2.1](#to-121)
- [1.2.0](#120)
- [1.1.0](#110)
- [1.0.3](#103)
- [1.0.2](#102)
- [1.0.1](#101)
- [1.0.0](#100)

## Unreleased

## To 1.5.0

From **1.4.1**:

```bash
composer update nowo-tech/altcha-type-bundle
```

## To 1.4.1

From **1.4.0**:

```bash
composer update nowo-tech/altcha-type-bundle
```

From **1.4.0**: no action. A cache pool that throws during the replay check now rejects the payload (logged as a warning) instead of causing a 500. Without `symfony/lock` the replay check is still best effort; install it with a shared store and set `replay_protection.require_lock: true`.

## To 1.4.0

From **1.3.0**:

```bash
composer update nowo-tech/altcha-type-bundle
```

From **1.3.0**: no config change is required.

- **Fail closed:** the replay check now rejects the payload when the lock store cannot be reached (it used to throw, i.e. a 500) or when the cache pool cannot save the "used" item (it used to accept the payload without recording it). While Redis or the lock store is down, protected forms fail validation. This applies to any pool whose `save()` returns `false`, not only "Redis down": for example APCu disabled in the CLI, or a `ChainAdapter` with one failing layer reject every submission.
- **Warning:** without a lock factory the bundle writes a warning to the container compiler log (and a debug line per check). To fail the build instead, set `replay_protection.require_lock: true`.
- **Several servers:** use a shared lock store and a shared cache pool ([CONCURRENCY.md](CONCURRENCY.md#lock-store-and-cache-pool)).

## To 1.3.0

From **1.2.4**: no action. `AltchaVerifierInterface` and `AltchaChallengeFactoryInterface` are new and additive; the class service ids still work. To replace the verifier or the challenge factory, alias the interface to your service (see [USAGE](USAGE.md#using-it-from-a-ddd--hexagonal-application)).

## To 1.2.4

From **1.2.3**:

```bash
composer update nowo-tech/altcha-type-bundle
```

From **1.2.3**: no action if `config/routes/nowo_altcha_type.yaml` (Flex recipe) imports `@NowoAltchaTypeBundle/Controller/` with `type: attribute`. If the challenge endpoint worked on Symfony >= 7.3 without that import (only through `controllers: { resource: routing.controllers }`), add the import now: the bundle route is opt-in and no longer registered by `routing.controllers`.

## To 1.2.3

From **1.2.2**:

```bash
composer update nowo-tech/altcha-type-bundle
```

## To 1.2.2

From **1.2.1**:

```bash
composer update nowo-tech/altcha-type-bundle
```

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
