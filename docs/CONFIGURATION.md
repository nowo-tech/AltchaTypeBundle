# Configuration

Root key: `nowo_altcha_type` (REQ-CFG-001). The tree is strict: unknown keys and out-of-range values fail at container compile time (REQ-SF-006).

## Table of contents

- [Options](#options)
- [Profiles](#profiles)
- [Replay protection](#replay-protection)
- [Sentinel](#sentinel)
- [Timeouts (FrankenPHP / PHP-FPM)](#timeouts-frankenphp--php-fpm)
- [Form theme (Symfony layouts)](#form-theme-symfony-layouts)
- [Translations](#translations)

## Options

| Key | Default | Description |
|---|---|---|
| `enable` | `true` | When `false`, the widget is not rendered and validation always passes (use only in `when@test`) |
| `hmac_signature` | `%env(APP_SECRET)%` | HMAC secret that signs challenges. The Flex recipe sets `%env(ALTCHA_HMAC_SIGNATURE)%` (dedicated, generated) |
| `hmac_key_signature` | `null` | Optional key-signature secret (altcha-org fast verification path) |
| `hmac_algorithm` | `SHA-256` | `SHA-256`, `SHA-384`, or `SHA-512` |
| `default_profile` | `default` | Profile used when the form option `profile` is omitted; must exist under `profiles` |
| `form_theme` | `form_div_layout.html.twig` | Base Symfony form layout; selects the matching bundle widget theme (closed list, see below) |
| `include_script` | `true` | With `use_stimulus: false`, the widget template emits the bundle CSS/JS tags (`nowo_altcha_type` asset package) |
| `use_stimulus` | `false` | Emit `data-controller="altcha-type"`; the host app registers the Stimulus controller |
| `debug` | `false` | Frontend `console.debug` logging |
| `replay_protection.enabled` | `true` | Reject a solved payload the second time it is submitted |
| `replay_protection.cache_pool` | `cache.app` | PSR-6 pool storing used challenges until they expire |
| `profiles` | built-in | Named difficulty / UX blocks ([Profiles](#profiles)) |
| `sentinel` | disabled | Optional ALTCHA Sentinel remote verification ([Sentinel](#sentinel)) |

## Profiles

A profile is a complete settings block. Every key is optional in your config; missing keys take the profile defaults.

| Key | Default | Limits | Description |
|---|---|---|---|
| `cost` | `5000` | 1 – 100000 | PBKDF2 iterations per attempt |
| `counter_min` | `5000` | 0 – 1000000 | Lower bound of the secret counter |
| `counter_max` | `10000` | 1 – 1000000, ≥ `counter_min` | Upper bound of the secret counter |
| `timeout` | `30.0` | ≥ 1.0 | Expected client solve budget (seconds) |
| `expires` | `+10 minutes` | relative, future, ≤ 1 day | Challenge lifetime (`strtotime` offset) |
| `floating` | `false` | — | Floating widget |
| `hide_logo` | `false` | — | Hide the ALTCHA logo |
| `hide_footer` | `false` | — | Hide the widget footer |

Built-in profiles: `default` (balanced), `low` (cheap, newsletters/comments), `high` (expensive, abuse-prone endpoints), `contact` (floating), `invisible` (floating, no logo/footer).

**How a profile is chosen at runtime**

1. Form option: `->add('security', AltchaType::class, ['profile' => 'contact'])` (omitted → `default_profile`).
2. The widget requests `GET /_nowo/altcha/challenge?profile=contact`; the profile name is signed into the challenge.
3. `AltchaValid` (added automatically by `AltchaType`) only accepts solutions for that profile.

**Merging**: your `profiles` are merged over the built-ins (`array_replace_recursive`), so you can tweak one key of a built-in or add new names. There are no legacy synonym keys.

```yaml
nowo_altcha_type:
  default_profile: contact
  profiles:
    contact:
      cost: 8000
    checkout:
      cost: 20000
      counter_min: 20000
      counter_max: 60000
      expires: '+5 minutes'
```

## Replay protection

Enabled by default. After a successful verification the challenge signature hash is stored in `replay_protection.cache_pool` until the challenge expires; resubmitting the same payload fails.

- Single host: `cache.app` (filesystem) is enough.
- Several hosts / containers: point it to a **shared** pool (e.g. a Redis-backed pool from `framework.cache.pools`).

```yaml
nowo_altcha_type:
  replay_protection:
    cache_pool: cache.altcha # define in framework.cache.pools with a shared adapter
```

Disable only if another layer guarantees single use (`replay_protection: false`).

## Sentinel

```yaml
nowo_altcha_type:
  sentinel:
    enabled: true
    base_url: 'https://sentinel.example.com'   # https:// required
    api_key: '%env(ALTCHA_SENTINEL_API_KEY)%'
    timeout: 5.0          # seconds per attempt, 0.5–10
    retries: 1            # 0–2
    fallback_local: false # verify locally only when Sentinel is unreachable
```

A Sentinel verdict (accepted or rejected) is final. With `fallback_local: true`, only transport failures (network error, 5xx, invalid response) fall back to local proof-of-work verification.

## Timeouts (FrankenPHP / PHP-FPM)

Sentinel is the only outbound I/O (REQ-RUNTIME-001). Worst case per verification: `(retries + 1) × timeout` plus a short back-off (300 ms, exponential), i.e. ≤ ~31 s with the maximum values and ~10.3 s with the defaults. Keep:

`sentinel` worst case < PHP `max_execution_time` < reverse-proxy / Caddy `servers.timeouts.write` (and FrankenPHP `max_wait_time` when workers are saturated).

Local verification and challenge creation are CPU-bound and bounded by the profile limits above.

## Form theme (Symfony layouts)

`form_theme` accepts: `form_div_layout.html.twig`, `form_table_layout.html.twig`, `bootstrap_5_layout.html.twig`, `bootstrap_5_horizontal_layout.html.twig`, `bootstrap_4_layout.html.twig`, `bootstrap_4_horizontal_layout.html.twig`, `bootstrap_3_layout.html.twig`, `bootstrap_3_horizontal_layout.html.twig`, `foundation_5_layout.html.twig`, `foundation_6_layout.html.twig`, `tailwind_2_layout.html.twig`. The bundle prepends the matching `@NowoAltchaTypeBundle/Form/altcha_type_theme*.html.twig` (see [THEMING.md](THEMING.md)).

## Translations

Domain `NowoAltchaTypeBundle`, shipped locales: `en`, `es`, `it`, `fr`, `pt`, `de`, `nl`. Override keys from the app — see [USAGE.md](USAGE.md#translations).
