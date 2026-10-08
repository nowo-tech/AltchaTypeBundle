# Security

Bundle-specific security guide for **AltchaTypeBundle** (REQ-SEC-001). The short repository policy (how to report a vulnerability) lives in [.github/SECURITY.md](../.github/SECURITY.md).

## Table of contents

- [Scope](#scope)
- [Attack surface](#attack-surface)
- [Threat model](#threat-model)
- [Mitigations](#mitigations)
- [Secrets and cryptography](#secrets-and-cryptography)
- [Logging](#logging)
- [Content Security Policy](#content-security-policy)
- [Permissions and exposure](#permissions-and-exposure)
- [Dependencies and updates](#dependencies-and-updates)
- [Release security checklist (12.4.1)](#release-security-checklist-1241)

## Scope

The bundle provides an anti-spam **proof-of-work** field for Symfony forms: it issues signed ALTCHA challenges, renders the widget, and verifies the submitted solution server-side.

It does **not**:

- authenticate users or replace CSRF protection (the host form keeps `csrf_protection`; REQ-SEC-005 is **N/A** — the only bundle route is a read-only `GET`);
- rate-limit requests (ALTCHA makes abuse *expensive*, not impossible — combine with the Symfony RateLimiter, honeypots, or moderation);
- store user data (no database, no cookies, no fingerprinting).

## Attack surface

| Input | Source | Notes |
| ----- | ------ | ----- |
| `GET /_nowo/altcha/challenge?profile=` | Anonymous HTTP | Public by design; returns a signed challenge JSON. |
| `AltchaType` field value | Form `POST` | Base64 JSON payload (challenge + solution) produced by the widget. |
| Sentinel response | Outbound HTTPS (optional) | Only when `sentinel.enabled: true`. |
| Bundle configuration | Host app (`config/packages`) | Secrets via env vars. |
| Widget attributes | Twig view vars | Challenge URL and booleans only. |

## Threat model

| Threat | Risk |
| ------ | ---- |
| **Replay** — solve one challenge, submit the payload many times | Bypasses the anti-spam cost |
| **Difficulty downgrade** — solve a cheap profile's challenge and submit it to an expensive form | Lowers the cost per submission |
| **Forged / tampered challenges** — client changes cost, expiry, or profile | Free solutions |
| **Expired challenge reuse** | Solutions harvested in advance |
| **Sentinel bypass** — fall back to local verification after a Sentinel rejection | Skips Sentinel policies |
| **DoS on the challenge endpoint** — each call runs PBKDF2 | CPU exhaustion |
| **Oversized payloads** | Memory/CPU on decode |
| **SSRF** via a misconfigured Sentinel URL | Outbound requests to internal hosts |
| **XSS** through rendered widget attributes | Script injection |
| **Secret leakage** — weak or shared HMAC key, secrets in logs | Challenge forgery |

## Mitigations

- **Single-use payloads** (`replay_protection`, enabled by default): after a successful verification the challenge signature hash is stored in a PSR-6 pool (`cache.app` by default) until the challenge expires; a second submission is rejected. Use a **shared** pool (Redis, database) when the app runs on several hosts.
- **Profile binding**: the profile name is embedded in the **signed** challenge `data`. `AltchaType` binds its `AltchaValid` constraint to the field profile, so a `low` solution is rejected on a `high` field.
- **Signature first**: `altcha-org/altcha` checks the HMAC signature (constant-time `hash_equals`) **before** any PBKDF2 work, so forged challenges cannot burn CPU on verification.
- **Mandatory expiry**: every issued challenge carries `expiresAt`; payloads without expiry are rejected, expired ones fail. Profile `expires` must be a relative future offset of at most one day.
- **Bounded difficulty**: profile `cost` ≤ `100000` and counters ≤ `1000000`; for ALTCHA v3 memory-hard algorithms `ARGON2ID` cost ≤ 10 and memory ≤ 64 MiB, `SCRYPT` N ≤ 65536, r ≤ 16, p ≤ 4 (configuration is rejected otherwise). Memory-hard profiles cost server memory on every challenge request — rate-limit the endpoint accordingly.
- **Algorithm pinning**: the key-derivation algorithm comes from the (signed) profile; payloads whose challenge algorithm differs are rejected before any derivation. Unknown `?profile=` values return **HTTP 400** (no exception / 500).
- **Payload size limit**: payloads longer than `4096` bytes are rejected before decoding.
- **Sentinel**: a Sentinel verdict (accept or reject) is **final**. Only a transport failure (network error, 5xx, invalid body) may fall back to local verification, and only with `sentinel.fallback_local: true` (default `false`). `base_url` must be `https://`; timeouts are bounded (`timeout` ≤ 10 s, `retries` ≤ 2) per REQ-RUNTIME-001.
- **Fail closed**: any decoding or verification error yields "invalid".
- **Escaping**: Twig autoescape is on; the challenge URL is rendered with `|e('html_attr')`; no user input reaches the widget template.
- **Test mode**: `enable: false` accepts every payload — the Flex recipe sets it **only** under `when@test`.

## Secrets and cryptography

- Challenges are signed with HMAC (`SHA-256` default, `SHA-384`/`SHA-512` available); solutions use the profile's ALTCHA v3 key derivation: PBKDF2 (default), SHA, Argon2id (`ext-sodium`) or Scrypt (`ext-scrypt`).
- Use a **dedicated** secret: the Flex recipe adds `ALTCHA_HMAC_SIGNATURE=%generate(secret)%` to `.env` and wires `hmac_signature: '%env(ALTCHA_HMAC_SIGNATURE)%'`. The bundle default (`%env(APP_SECRET)%`) is a fallback only.
- Never commit real secrets; keep them in env vars or Symfony secrets. Rotating the key invalidates outstanding challenges (users simply solve again).
- An empty key never verifies (fail closed).

## Logging

- Logged (PSR-3, injected logger): rejection reasons at `info` (malformed payload, missing expiry, profile mismatch, replay), verification/Sentinel errors at `warning`, Sentinel call start/finish at `debug`.
- **Never logged**: payloads, challenge signatures, HMAC secrets, Sentinel API keys.
- The frontend logs to `console.debug` only when `debug: true`.

## Content Security Policy

When the host app sends a CSP:

- `script-src` / `style-src` must allow the bundle assets (`/bundles/nowoaltchatype/` via `assets:install`) or your Vite build;
- `connect-src` must allow the challenge route (same origin by default) and, if the widget verifies remotely, your Sentinel host;
- `worker-src blob:` is required by the ALTCHA widget, which solves the proof-of-work in Web Workers; Argon2id / Scrypt profiles additionally load `'self'` workers from `/bundles/nowoaltchatype/workers/`.

## Permissions and exposure

- `/_nowo/altcha/challenge` must be `PUBLIC_ACCESS` (anonymous users solve challenges before submitting). It does not change state and sends `Cache-Control: no-store`.
- Rate-limit it in the host app, for example with the Symfony RateLimiter on the route, or at the reverse proxy.
- No admin UI, no other routes.

## Dependencies and updates

- Runtime dependencies: `altcha-org/altcha` (^2.3), Symfony components, PSR contracts, Twig Extra.
- CI runs `composer audit` on every build; Dependabot (`composer`, `npm`, `github-actions`) proposes updates weekly.
- Security fixes are released as patch versions and noted in [CHANGELOG.md](CHANGELOG.md).

## Release security checklist (12.4.1)

| Item | Check |
| ---- | ----- |
| `docs/SECURITY.md` up to date (this file) | ✅ |
| `.env` / `.env.local` ignored; only `.env.example` / `.env.test` committed in demos | ✅ |
| No secrets in the repository (placeholders only) | ✅ |
| Safe Flex recipe (`%generate(secret)%`, `enable: false` only in `when@test`) | ✅ |
| Input validation and output escaping (payload limits, signed data, Twig escaping) | ✅ |
| Dependencies audited (`composer audit` in CI) | ✅ |
| No secrets or payloads in logs | ✅ |
| Cryptography: HMAC-SHA2 + PBKDF2 / SHA / Argon2id / Scrypt (ALTCHA v3), algorithm pinned per profile, constant-time comparison, dedicated key | ✅ |
| Permissions / exposure: single public `GET` route, documented | ✅ |
| Limits / DoS: bounded cost, counters, expiry, Sentinel timeouts, 400 on unknown profile | ✅ |
| AI security audit (REQ-SEC-004) passed — see `BUNDLES_SECURITY_ANALYSIS.md` (AltchaTypeBundle) | ✅ |
