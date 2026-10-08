# Use cases

| Profile | Typical form | Notes |
|---|---|---|
| `contact` | Contact / support | Floating widget, moderate cost |
| `default` | General forms | Balanced PoW |
| `low` | Newsletter, comments | Faster solve, lower cost |
| `high` | Account deletion, payment | Slower solve, higher cost |
| `invisible` | Marketing CTAs | Floating + hidden chrome |
| custom `algorithm: ARGON2ID` | Signup / high-value targets attacked with GPU farms | Memory-hard PoW (ALTCHA v3); small counter range; needs `ext-sodium` |

Combine with host rate limiting and honeypots for stronger spam defence — ALTCHA makes abuse expensive, not impossible.
