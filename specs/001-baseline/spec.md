# Spec: AltchaTypeBundle baseline (001)

**Status:** baseline of shipped behaviour · **Config root:** `nowo_altcha_type` · **Inventory:** [code-inventory.md](code-inventory.md) · **Process:** [docs/SPEC-DRIVEN-DEVELOPMENT.md](../../docs/SPEC-DRIVEN-DEVELOPMENT.md)

## Summary

`nowo-tech/altcha-type-bundle` integrates [ALTCHA](https://altcha.org/) proof-of-work verification into Symfony forms. Integrators get:

- the `AltchaType` form field (unmapped hidden input + `<altcha-widget>` v3) bound to a named difficulty profile;
- a public challenge endpoint `GET /_nowo/altcha/challenge` (route `nowo_altcha_type_challenge`) issuing HMAC-signed, expiring, profile-bound challenges;
- server-side verification (`AltchaValid` / `AltchaVerifier`) with single-use (replay) protection and optional ALTCHA Sentinel;
- Twig form themes for 11 Symfony layouts, an IIFE script and a Stimulus controller, translations in 7 locales.

## User scenarios

### US-01 — Protect a form (P1)

- **Given** a form with `->add('security', AltchaType::class)` and `enable: true`,
- **When** a visitor solves the widget and submits,
- **Then** the form is valid; **and when** the payload is missing, malformed, expired, forged or already used, **then** the field shows `form.error.invalid`.

### US-02 — Choose difficulty per form (P1)

- **Given** profiles `low` and `high`,
- **When** a field uses `'profile' => 'high'`,
- **Then** the widget fetches `?profile=high` and a solution of a `low` challenge is rejected.

### US-03 — Test environments (P1)

- **Given** `when@test: { nowo_altcha_type: { enable: false } }`,
- **When** functional tests submit the form,
- **Then** no widget is rendered and validation passes.

### US-04 — Remote verification with Sentinel (P2)

- **Given** `sentinel.enabled: true` with an `https://` base URL,
- **When** a payload is submitted,
- **Then** Sentinel's verdict is final; **and when** Sentinel is unreachable, **then** verification fails unless `fallback_local: true`, in which case local verification runs.

### US-05 — Frontend integration choice (P2)

- **Given** `include_script: true` (default), **then** the widget template emits the bundle CSS/JS from the `nowo_altcha_type` asset package;
- **Given** `use_stimulus: true`, **then** the wrapper carries `data-controller="altcha-type"` and the host registers the controller.

## Functional requirements

### Bundle and DI (`FR-DI-*`)

- **FR-DI-1** — `NowoAltchaTypeBundle` registers `AltchaTypeExtension` (alias `nowo_altcha_type`) and `TwigPathsPass`.
- **FR-DI-2** — `Configuration` is strict: `default_profile` must exist in `profiles`; `form_theme` is a closed list; profile `cost` ≤ 100000, counters ≤ 1000000, `expires` a relative future offset ≤ 1 day; Sentinel `base_url` must be `https://` when enabled, `timeout` 0.5–10 s, `retries` 0–2.
- **FR-DI-3** — Built-in profiles `default`, `low`, `high`, `contact`, `invisible` are merged under user profiles.
- **FR-DI-4** — `prepend()` adds the matching bundle form theme to `twig.form_themes` and the asset package `nowo_altcha_type` (`/bundles/nowoaltchatype`).
- **FR-DI-5** — `replay_protection` (default enabled, `cache.app`) wires a PSR-6 pool into `AltchaVerifier`; disabled → `null`.
- **FR-DI-6** — `TwigPathsPass` appends `Resources/views` under namespace `NowoAltchaTypeBundle` so app overrides win.

### Challenge endpoint (`FR-CTRL-*`)

- **FR-CTRL-1** — `GET /_nowo/altcha/challenge` (attribute route) returns challenge JSON with `Cache-Control: no-store`.
- **FR-CTRL-2** — Unknown `?profile=` returns HTTP 400 `{"error":"unknown_profile"}`; empty → default profile.

### Services (`FR-SVC-*`)

- **FR-SVC-1** — `AltchaClientFactory` builds the altcha-org client and PBKDF2 algorithm for `SHA-256|384|512`.
- **FR-SVC-2** — `AltchaChallengeFactory` signs `cost`, a random counter in `[counter_min, counter_max]`, `expiresAt` from the injected clock, and `data.profile`.
- **FR-SVC-3** — `AltchaVerifier` rejects non-string, empty or > 4096-byte payloads; rejects challenges without expiry, with another profile, expired, forged, or invalid; fails closed on errors.
- **FR-SVC-4** — With a replay pool, the first valid use stores `sha256(signature)` until expiry; later uses are rejected.
- **FR-SVC-5** — Sentinel: verdict final; transport failures (exception, non-2xx/400, invalid body — detected by `TransportTrackingHttpClient`) fall back locally only with `fallback_local`.
- **FR-SVC-6** — `enable: false` accepts every payload.

### Profiles (`FR-PROF-*`)

- **FR-PROF-1** — `AltchaTypeProfileRegistry` resolves profiles by name (default when null) and throws on unknown names.

### Form and validation (`FR-FORM-*`)

- **FR-FORM-1** — `AltchaType` (parent `TextType`, prefix `nowo_altcha_type`, unmapped) exposes `profile`, `floating`, `hide_logo`, `hide_footer`, `challenge_url`.
- **FR-FORM-2** — Required fields get one `AltchaValid` bound to the field profile (existing `AltchaValid` constraints are kept); `required: false` adds none.
- **FR-FORM-3** — `AltchaValid` / `AltchaValidValidator` delegate to `AltchaVerifier` with the constraint profile; violation message `form.error.invalid` in domain `NowoAltchaTypeBundle`.
- **FR-FORM-4** — A missing challenge route raises a `RouteNotFoundException` explaining how to import the routes.

### Twig and views (`FR-TWIG-*`)

- **FR-TWIG-1** — `nowo_altcha_type_asset_path()` sanitizes asset filenames; `nowo_altcha_type_asset_package()` returns `nowo_altcha_type`.
- **FR-TWIG-2** — The widget partial renders the wrapper, an empty hidden input, and `<altcha-widget challenge display configuration>`; emits asset tags when `include_script && !use_stimulus`; `data-controller` when `use_stimulus`; a `disabled` placeholder when `enable: false`.
- **FR-TWIG-3** — One theme per supported Symfony layout defines `nowo_altcha_type_widget` by including the partial.

### Assets (`FR-ASSET-*`) and build outputs (`FR-BUILD-*`)

- **FR-ASSET-1** — `initAltchaContainer` copies the widget payload into the hidden input on `verified` / `statechange: verified`, clears it on `unverified|error|expired`; `destroyAltchaContainer` removes listeners.
- **FR-ASSET-2** — The Stimulus controller binds on connect and unbinds on disconnect.
- **FR-ASSET-3** — The IIFE boots once per page and binds containers added later (MutationObserver).
- **FR-ASSET-4** — Debug logging only when enabled; wrapper CSS hides the input.
- **FR-BUILD-1** — `public/altcha-type.js` is built by Vite from `assets/src/altcha-type.ts` (bundles `altcha` v3); `public/altcha-type.css` is copied from `assets/css/altcha-type.css`.

### Translations (`FR-I18N-*`)

- **FR-I18N-1** — Domain `NowoAltchaTypeBundle` with identical keys in `en`, `es`, `it`, `fr`, `pt`, `de`, `nl`.

## Success criteria

- **SC-1** — `make coverage-check`: 100% PHP lines; `make assets-test`: 100% TS (bootstrap `altcha-type.ts` excluded).
- **SC-2** — `make phpstan` (level 8, `ignoreErrors: []`) and `make igor` clean.
- **SC-3** — Demo e2e (`make -C demo/symfony8 test-e2e`) solves a real challenge and passes server verification.
- **SC-4** — Inventory maps **41/41** production units under `src/`.

## Non-goals

- Rate limiting the challenge endpoint (host concern, documented in `docs/SECURITY.md`).
- Custom widget UI (the official `<altcha-widget>` is used).
- Code challenges / obfuscation plugins of the ALTCHA widget.

## Assumptions

- Hosts run `assets:install` or bundle the controller themselves; multi-host deployments configure a shared replay pool.

## Validation

```bash
make release-check
make -C demo/symfony8 test-e2e
```

## See also

[SPEC-DRIVEN-DEVELOPMENT.md](../../docs/SPEC-DRIVEN-DEVELOPMENT.md) · [USAGE.md](../../docs/USAGE.md) · [CONFIGURATION.md](../../docs/CONFIGURATION.md) · [SECURITY.md](../../docs/SECURITY.md)
