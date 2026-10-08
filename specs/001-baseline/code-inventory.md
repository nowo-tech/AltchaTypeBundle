# Code inventory — AltchaTypeBundle baseline (001)

Last audited: 2026-10-08

Scope: every file under `src/` loaded by integrators or the runtime. Co-located Vitest specs (`*.test.ts`, 4 files) are **excluded** (they are tests, covered by `vitest.config.ts`). Build outputs are documented as outputs of named sources (`FR-BUILD-*`).

Audit command: `find src -type f ! -name '*.test.ts' | wc -l` → **44**.

## Bundle and DI

| Source path | Spec section | Requirement ID(s) |
| --- | --- | --- |
| `src/NowoAltchaTypeBundle.php` | Bundle and DI | FR-DI-1 |
| `src/DependencyInjection/Configuration.php` | Bundle and DI | FR-DI-2, FR-DI-3, FR-DI-7 |
| `src/DependencyInjection/AltchaTypeExtension.php` | Bundle and DI | FR-DI-4, FR-DI-5 |
| `src/DependencyInjection/Compiler/TwigPathsPass.php` | Bundle and DI | FR-DI-6 |
| `src/Resources/config/services.yaml` | Bundle and DI | FR-DI-1, FR-DI-5 |

## Controller

| Source path | Spec section | Requirement ID(s) |
| --- | --- | --- |
| `src/Controller/AltchaChallengeController.php` | Challenge endpoint | FR-CTRL-1, FR-CTRL-2 |

## Services

| Source path | Spec section | Requirement ID(s) |
| --- | --- | --- |
| `src/Service/AltchaClientFactory.php` | Services | FR-SVC-1, FR-SVC-7 |
| `src/Service/AltchaChallengeFactory.php` | Services | FR-SVC-2, FR-SVC-7 |
| `src/Service/AltchaVerifier.php` | Services | FR-SVC-3, FR-SVC-4, FR-SVC-5, FR-SVC-6, FR-SVC-7 |
| `src/Service/Sentinel/TransportTrackingHttpClient.php` | Services | FR-SVC-5 |

## Profiles

| Source path | Spec section | Requirement ID(s) |
| --- | --- | --- |
| `src/Profile/AltchaTypeProfileRegistry.php` | Profiles | FR-PROF-1 |

## Form and validation

| Source path | Spec section | Requirement ID(s) |
| --- | --- | --- |
| `src/Form/Type/AltchaType.php` | Form and validation | FR-FORM-1, FR-FORM-2, FR-FORM-4 |
| `src/Validator/Constraints/AltchaValid.php` | Form and validation | FR-FORM-3 |
| `src/Validator/Constraints/AltchaValidValidator.php` | Form and validation | FR-FORM-3 |

## Twig

| Source path | Spec section | Requirement ID(s) |
| --- | --- | --- |
| `src/Twig/NowoAltchaTypeTwigExtension.php` | Twig and views | FR-TWIG-1 |

## Views

| Source path | Spec section | Requirement ID(s) |
| --- | --- | --- |
| `src/Resources/views/Form/_altcha_type_widget.html.twig` | Twig and views | FR-TWIG-2 |
| `src/Resources/views/Form/altcha_type_theme.html.twig` | Twig and views | FR-TWIG-3 |
| `src/Resources/views/Form/altcha_type_theme_table.html.twig` | Twig and views | FR-TWIG-3 |
| `src/Resources/views/Form/altcha_type_theme_bootstrap3.html.twig` | Twig and views | FR-TWIG-3 |
| `src/Resources/views/Form/altcha_type_theme_bootstrap3_horizontal.html.twig` | Twig and views | FR-TWIG-3 |
| `src/Resources/views/Form/altcha_type_theme_bootstrap4.html.twig` | Twig and views | FR-TWIG-3 |
| `src/Resources/views/Form/altcha_type_theme_bootstrap4_horizontal.html.twig` | Twig and views | FR-TWIG-3 |
| `src/Resources/views/Form/altcha_type_theme_bootstrap5.html.twig` | Twig and views | FR-TWIG-3 |
| `src/Resources/views/Form/altcha_type_theme_bootstrap5_horizontal.html.twig` | Twig and views | FR-TWIG-3 |
| `src/Resources/views/Form/altcha_type_theme_foundation5.html.twig` | Twig and views | FR-TWIG-3 |
| `src/Resources/views/Form/altcha_type_theme_foundation6.html.twig` | Twig and views | FR-TWIG-3 |
| `src/Resources/views/Form/altcha_type_theme_tailwind2.html.twig` | Twig and views | FR-TWIG-3 |

## Translations

| Source path | Spec section | Requirement ID(s) |
| --- | --- | --- |
| `src/Resources/translations/NowoAltchaTypeBundle.de.yaml` | Translations | FR-I18N-1 |
| `src/Resources/translations/NowoAltchaTypeBundle.en.yaml` | Translations | FR-I18N-1 |
| `src/Resources/translations/NowoAltchaTypeBundle.es.yaml` | Translations | FR-I18N-1 |
| `src/Resources/translations/NowoAltchaTypeBundle.fr.yaml` | Translations | FR-I18N-1 |
| `src/Resources/translations/NowoAltchaTypeBundle.it.yaml` | Translations | FR-I18N-1 |
| `src/Resources/translations/NowoAltchaTypeBundle.nl.yaml` | Translations | FR-I18N-1 |
| `src/Resources/translations/NowoAltchaTypeBundle.pt.yaml` | Translations | FR-I18N-1 |

## Assets (TypeScript / CSS)

| Source path | Spec section | Requirement ID(s) |
| --- | --- | --- |
| `src/Resources/assets/src/altcha-type-lib.ts` | Assets | FR-ASSET-1 |
| `src/Resources/assets/controllers/altcha_type_controller.ts` | Assets | FR-ASSET-2 |
| `src/Resources/assets/src/altcha-type.ts` | Assets | FR-ASSET-3 |
| `src/Resources/assets/src/logger.ts` | Assets | FR-ASSET-4 |
| `src/Resources/assets/src/altcha-workers.ts` | Assets | FR-ASSET-5 |
| `src/Resources/assets/css/altcha-type.css` | Assets | FR-ASSET-4 |

## Build outputs

| Source path | Spec section | Requirement ID(s) |
| --- | --- | --- |
| `src/Resources/public/altcha-type.js` (from `assets/src/altcha-type.ts`) | Build outputs | FR-BUILD-1 |
| `src/Resources/public/altcha-type.css` (from `assets/css/altcha-type.css`) | Build outputs | FR-BUILD-1 |
| `src/Resources/public/workers/argon2id.js` (from `altcha/dist/workers/`) | Build outputs | FR-BUILD-2 |
| `src/Resources/public/workers/scrypt.js` (from `altcha/dist/workers/`) | Build outputs | FR-BUILD-2 |

## Coverage summary

| Category | Units |
| --- | --- |
| Bundle and DI | 5 |
| Controller | 1 |
| Services | 4 |
| Profiles | 1 |
| Form and validation | 3 |
| Twig | 1 |
| Views | 12 |
| Translations | 7 |
| Assets | 6 |
| Build outputs | 4 |
| **Total mapped** | **44 / 44** |

Tests: PHPUnit `tests/Unit/**` (one test class per production PHP class); Vitest co-located specs; Playwright demo e2e.
