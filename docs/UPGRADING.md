# Upgrading

## 1.0.0

Initial public release — no upgrade path yet.

Notes for early adopters of pre-release snapshots:

- The YAML route file `Resources/config/routes.yaml` was replaced by attribute routes: import `resource: '@NowoAltchaTypeBundle/Controller/'` with `type: attribute` (same route name and path).
- The unused `translation_domain` option was removed; the domain is always `NowoAltchaTypeBundle`.
- Per-field `cost`, `counter_min`, `counter_max`, `timeout` and `expires` form options were removed; set them in a profile.
- The widget requires the ALTCHA **v3** web component (npm `altcha` ^3.2) when you bundle it yourself.
