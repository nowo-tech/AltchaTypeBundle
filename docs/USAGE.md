# Usage

## Table of contents

- [Form field](#form-field)
- [Twig rendering](#twig-rendering)
- [Assets](#assets)
- [Stimulus (optional)](#stimulus-optional)
- [Validation outside forms](#validation-outside-forms)
- [Challenge route security](#challenge-route-security)
- [Translations](#translations)

## Form field

```php
use Nowo\AltchaTypeBundle\Form\Type\AltchaType;

$builder->add('security', AltchaType::class, [
    'profile' => 'contact',     // optional, defaults to default_profile
    // Optional widget presentation overrides:
    // 'floating' => true,
    // 'hide_logo' => true,
    // 'hide_footer' => true,
    // 'challenge_url' => '/custom/challenge', // own endpoint instead of the bundle route
]);
```

| Option | Default | Description |
|---|---|---|
| `profile` | `null` (→ `default_profile`) | Difficulty profile; the solution must come from a challenge of this profile |
| `floating`, `hide_logo`, `hide_footer` | `null` (→ profile) | Widget presentation |
| `challenge_url` | `null` (→ bundle route) | Challenge URL used by the widget |
| `required` | `true` | When `false`, **no** `AltchaValid` constraint is added (the field is decorative) |

The field is unmapped (`mapped: false`). Difficulty (`cost`, counters, expiry) lives in [profiles](CONFIGURATION.md#profiles) so it is signed server-side and cannot be lowered per request.

## Twig rendering

Render forms with a child loop (REQ-TWIG-003). Never write raw `<form>` / `<input>` tags in app or demo templates (REQ-TWIG-005); the widget markup comes from the bundle form theme.

```twig
{{ form_start(form) }}
{% for child in form %}
    {% if not child.rendered %}
        {{ form_row(child) }}
    {% endif %}
{% endfor %}
{{ form_end(form) }}
```

## Assets

Run `php bin/console assets:install`. With `include_script: true` and `use_stimulus: false` (defaults) the widget template emits the tags itself (the script boots once per page). To load them yourself:

```twig
<link rel="stylesheet" href="{{ asset(nowo_altcha_type_asset_path('altcha-type.css'), nowo_altcha_type_asset_package()) }}">
<script src="{{ asset(nowo_altcha_type_asset_path('altcha-type.js'), nowo_altcha_type_asset_package()) }}" defer></script>
```

## Stimulus (optional)

Set `use_stimulus: true` and `include_script: false`, install `altcha` (`pnpm add altcha`) and register the controller from the bundle sources (e.g. with a Vite alias to `vendor/nowo-tech/altcha-type-bundle/src/Resources/assets`):

```ts
import AltchaTypeController from '@bundle/controllers/altcha_type_controller';
import '@bundle/css/altcha-type.css';

application.register('altcha-type', AltchaTypeController);
```

The Symfony 8 demo (`demo/symfony8`) uses exactly this setup with Pentatrion Vite.

Argon2id / Scrypt profiles (ALTCHA v3): the controller registers the workers from `data-altcha-type-workers-url-value` (bundle asset package, `assets:install` required). If you prefer bundling them yourself, register them before the widget solves (`$altcha.algorithms.set('ARGON2ID', () => new Worker(...))`, see the ALTCHA widget docs); existing registrations are kept.

## Validation outside forms

```php
use Nowo\AltchaTypeBundle\Validator\Constraints\AltchaValid;

#[AltchaValid(profile: 'contact')]
public ?string $altcha = null;
```

Or call `Nowo\AltchaTypeBundle\Service\AltchaVerifier::verify($payload, 'contact')` directly.

## Challenge route security

Import the bundle controllers (attribute routes, done by the Flex recipe):

```yaml
# config/routes/nowo_altcha_type.yaml
nowo_altcha_type:
  resource: '@NowoAltchaTypeBundle/Controller/'
  type: attribute
```

The route `nowo_altcha_type_challenge` (`GET /_nowo/altcha/challenge`) must be public:

```yaml
access_control:
  - { path: ^/_nowo/altcha/challenge, roles: PUBLIC_ACCESS }
```

Add a rate limiter on that path in production (see [SECURITY.md](SECURITY.md#permissions-and-exposure)).

## Translations

Translation domain `NowoAltchaTypeBundle`; supported locales `en`, `es`, `it`, `fr`, `pt`, `de`, `nl` (REQ-I18N-002). Override any key from the app (REQ-I18N-001) by creating a file with the same domain, e.g. `translations/NowoAltchaTypeBundle.es.yaml`:

```yaml
form:
  error:
    invalid: 'Verificación anti-spam no superada. Inténtalo de nuevo.'
```

Then run `php bin/console cache:clear`. App translations take precedence over the bundle catalogue.
