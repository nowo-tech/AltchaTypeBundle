# Theming

## Table of contents

- [Form themes](#form-themes)
- [CSS hooks](#css-hooks)
- [Widget appearance](#widget-appearance)
- [Overriding bundle templates (REQ-TWIG-001)](#overriding-bundle-templates-req-twig-001)

## Form themes

`nowo_altcha_type.form_theme` selects which bundle theme is prepended to `twig.form_themes` (see [CONFIGURATION.md](CONFIGURATION.md#form-theme-symfony-layouts)). Every theme only defines the `nowo_altcha_type_widget` block and includes the shared widget partial.

## CSS hooks

`altcha-type.css` only lays out the wrapper; the ALTCHA web component ships its own styles.

| Class | Element |
| ----- | ------- |
| `.nowo-altcha-type` | Wrapper `<div>` (also the Stimulus controller element) |
| `.nowo-altcha-type__input` | Visually hidden Symfony input receiving the payload |
| `.nowo-altcha-type__widget` | The `<altcha-widget>` element |

Style the widget itself with the ALTCHA CSS variables (e.g. `--altcha-color-base`, `--altcha-border-radius`) on `.nowo-altcha-type__widget`; see the [ALTCHA widget docs](https://altcha.org/docs/integration/widget/).

## Widget appearance

Per profile or per field: `floating` (renders `display="floating"`), `hide_logo`, `hide_footer` (passed through the widget `configuration` attribute).

## Overriding bundle templates (REQ-TWIG-001)

Bundle templates live under `src/Resources/views/` with the Twig namespace `@NowoAltchaTypeBundle`. To override one, copy it to the **same relative path** under `templates/bundles/NowoAltchaTypeBundle/` in your app:

| Bundle template (`@NowoAltchaTypeBundle/…`) | Purpose |
| ------------------------------------------- | ------- |
| `Form/_altcha_type_widget.html.twig` | Shared widget markup (wrapper, hidden input, `<altcha-widget>`, optional asset tags) |
| `Form/altcha_type_theme.html.twig` | `form_div_layout.html.twig` |
| `Form/altcha_type_theme_table.html.twig` | `form_table_layout.html.twig` |
| `Form/altcha_type_theme_bootstrap5.html.twig` | `bootstrap_5_layout.html.twig` |
| `Form/altcha_type_theme_bootstrap5_horizontal.html.twig` | `bootstrap_5_horizontal_layout.html.twig` |
| `Form/altcha_type_theme_bootstrap4.html.twig` | `bootstrap_4_layout.html.twig` |
| `Form/altcha_type_theme_bootstrap4_horizontal.html.twig` | `bootstrap_4_horizontal_layout.html.twig` |
| `Form/altcha_type_theme_bootstrap3.html.twig` | `bootstrap_3_layout.html.twig` |
| `Form/altcha_type_theme_bootstrap3_horizontal.html.twig` | `bootstrap_3_horizontal_layout.html.twig` |
| `Form/altcha_type_theme_foundation5.html.twig` | `foundation_5_layout.html.twig` |
| `Form/altcha_type_theme_foundation6.html.twig` | `foundation_6_layout.html.twig` |
| `Form/altcha_type_theme_tailwind2.html.twig` | `tailwind_2_layout.html.twig` |

Steps:

1. Copy the file, e.g. `vendor/nowo-tech/altcha-type-bundle/src/Resources/views/Form/_altcha_type_widget.html.twig` → `templates/bundles/NowoAltchaTypeBundle/Form/_altcha_type_widget.html.twig`.
2. Edit it; keep `data-altcha-type-target="input"` / `"widget"` and the `altcha_*` variables so the script and validation keep working.
3. Run `php bin/console cache:clear`.

**Freeze rule:** a file at that override path **always wins** and **will not pick up vendor changes** for that path until you delete or merge it. Prefer CSS hooks, `form_theme`, and profile options when you still want upstream widget fixes on `composer update`.
