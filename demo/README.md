# AltchaTypeBundle demos

Demo for **Symfony 8.1** that shows **ALTCHA proof-of-work** forms per difficulty profile (contact, low, high, invisible, newsletter). **Pentatrion Vite** + TypeScript + Stimulus. JavaScript deps: **pnpm only**.

## Quick start (Docker)

From the **bundle root**:

```bash
make up-symfony8
```

Then open http://localhost:8055.

## Demos

| Demo     | Port | Description |
|----------|------|-------------|
| symfony8 | 8055 | Symfony 8.1 + ALTCHA forms, Pentatrion Vite + Stimulus, Web Profiler (dev), FrankenPHP worker mode |

Locale in the URL: `/en`, `/es`, `/it`, `/fr`, `/pt`, `/de`, `/nl`. Use-case query: `?case=contact` (and `low`, `high`, `invisible`, `newsletter`).

FrankenPHP setup and worker mode: [docs/DEMO-FRANKENPHP.md](../docs/DEMO-FRANKENPHP.md). E2E: `make -C symfony8 test-e2e`.

How to reuse each case in a host app: [docs/USE-CASES.md](../docs/USE-CASES.md).
