# Upgrading

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
