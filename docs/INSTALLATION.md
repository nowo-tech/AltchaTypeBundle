# Installation

```bash
composer require nowo-tech/altcha-type-bundle
```

1. Register `Nowo\AltchaTypeBundle\NowoAltchaTypeBundle` in `config/bundles.php`.
2. Import the bundle controllers (attribute routes): `config/routes/nowo_altcha_type.yaml` with `resource: '@NowoAltchaTypeBundle/Controller/'` and `type: attribute` (route `nowo_altcha_type_challenge`).
3. Ensure `/_nowo/altcha/challenge` is `PUBLIC_ACCESS` if you lock the whole site.
4. Run `php bin/console assets:install` after every install/upgrade. The bundle registers the named asset package `nowo_altcha_type` (base path `/bundles/nowoaltchatype`). With `include_script: true` (default) the form theme emits the tags for you; to load them yourself (e.g. in a layout):

```twig
<link rel="stylesheet" href="{{ asset('altcha-type.css', 'nowo_altcha_type') }}">
<script src="{{ asset('altcha-type.js', 'nowo_altcha_type') }}" defer></script>
```

5. Use a dedicated HMAC secret (the Flex recipe adds `ALTCHA_HMAC_SIGNATURE=<generated>` to `.env`):

```yaml
nowo_altcha_type:
  hmac_signature: '%env(ALTCHA_HMAC_SIGNATURE)%'
```

6. Twig Extra (REQ-TWIG-004): `twig/extra-bundle` and `twig/string-extra` are runtime dependencies installed with the bundle. Make sure `Twig\Extra\TwigExtraBundle\TwigExtraBundle::class => ['all' => true]` is registered in `config/bundles.php` (Flex does it automatically).

7. Replay protection uses `cache.app` by default; configure a shared pool when you run several hosts (see [CONFIGURATION.md](CONFIGURATION.md#replay-protection)).

The Flex recipe registers the bundle, adds the env var, and copies the package and route stubs under `config/`.
