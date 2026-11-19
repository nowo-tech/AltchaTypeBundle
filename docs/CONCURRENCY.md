# Concurrency (REQ-RUNTIME-003)

## Table of contents

- [Write paths](#write-paths)
- [The replay check](#the-replay-check)
- [Lock store and cache pool](#lock-store-and-cache-pool)
- [Missing lock factory](#missing-lock-factory)
- [Codes and HTTP answers (rule 6)](#codes-and-http-answers-rule-6)
- [Host options](#host-options)
- [Tests](#tests)
- [Residual risks](#residual-risks)

## Write paths

The bundle has no entities, no Doctrine/DBAL writes, no commands and no message handlers. Its only shared write is the replay cache.

| Path | Transaction | Control | Conflict answer |
|------|-------------|---------|-----------------|
| `AltchaVerifier::verify()` → `consume()`: mark a solved challenge as used in the PSR-6 pool (`replay_protection.cache_pool`) | None (two cache calls: `getItem`, `save`) | Symfony Lock per challenge (`replay_protection.lock_factory`, key `nowo_altcha_type.used.<sha256(signature)>`, TTL 10 s, blocking acquire, released in `finally`). Without a lock factory: best effort. | None: the loser of a race sees the item and the field gets the normal `AltchaValid` validation error (the form is invalid, no 4xx/5xx) |
| `AltchaChallengeController` (GET challenge) | None | Read-only: signs a fresh challenge, stores nothing | Not applicable |

## The replay check

A solved challenge is accepted once ("only one" rule). `consume()` runs:

1. acquire the per-challenge lock (blocking; at most 10 s, the lock TTL, behind another holder);
2. read the item; if it is a hit, reject (replay);
3. write the item with a TTL equal to the challenge's remaining lifetime;
4. release the lock (a failed release is logged; the lock then expires after its TTL).

The check **fails closed**:

- if the lock store cannot be reached (`acquire()` throws), the payload is rejected and a warning is logged;
- if the cache pool cannot record the use (`save()` returns false, e.g. Redis down), the payload is rejected and a warning is logged.

Before this change both cases either propagated an exception (lock) or accepted the payload without recording it (cache), so a payload could be reused while the cache was failing.

Sentinel verification (`sentinel.enabled`) does not use this path: single use is enforced by Sentinel. With `sentinel.fallback_local` the local fallback runs the same replay check.

## Lock store and cache pool

The lock only serializes processes that share the **same lock store**, and the replay item only stops a reuse that reaches the **same cache pool**.

| Deploy | Lock store | Cache pool | Result |
|--------|------------|------------|--------|
| One server (PHP-FPM or FrankenPHP workers) | `flock` / `semaphore` (FrameworkBundle default) | Filesystem `cache.app` or Redis | Atomic: exactly one submission passes |
| Several servers | Shared: Redis, Memcached, PDO/DBAL, ZooKeeper (`framework.lock: '%env(LOCK_DSN)%'`) | Shared: Redis/Memcached/DB pool | Atomic: exactly one submission passes |
| Several servers | Local (`flock` / `semaphore`) | Shared | **Not atomic**: two servers can both pass the same payload at the same instant |
| Several servers | any | Local (filesystem `cache.app` per server) | **Not single use**: the same payload passes once per server, even sequentially |

A multi-server deploy therefore needs **both** a shared lock store **and** a shared cache pool, for example:

```yaml
framework:
    lock: '%env(LOCK_DSN)%'          # e.g. redis://redis:6379
    cache:
        pools:
            cache.altcha_replay:
                adapter: cache.adapter.redis
                provider: '%env(REDIS_DSN)%'

nowo_altcha_type:
    replay_protection:
        cache_pool: cache.altcha_replay
        require_lock: true
```

The race tests check both lock cases with real OS processes (see [Tests](#tests)).

## Missing lock factory

When replay protection is enabled and the lock factory service does not exist (`symfony/lock` not installed, `framework.lock` disabled, or `lock_factory: null`), the replay check is best effort.

Decision: **warn by default, fail on request.**

- By default the bundle keeps working (no BC break for hosts without `symfony/lock`): `ReplayLockPass` writes a warning to the container compiler log at build time (`var/cache/<env>/*Compiler.log`), and `AltchaVerifier` logs a `debug` line on each best-effort check. The verifier keeps no "already warned" flag, so it stays stateless in worker mode (Igor).
- With `replay_protection.require_lock: true` the container fails to build (`LogicException`) when the lock factory is missing. Production hosts that run several workers or servers should set it.

The bundle does not tie the failure to `kernel.debug`: a missing lock is a deploy property, not a debug one, and failing only outside debug would hide the problem until production.

## Codes and HTTP answers (rule 6)

**Not applicable.** No lock conflict, deadlock, lock-wait timeout or serialization failure reaches an HTTP answer of the bundle:

- the bundle has no database writes, so it never sees deadlocks or serialization failures;
- the replay lock is acquired in blocking mode: a second submission waits (at most the 10 s TTL), it does not get a conflict;
- an unavailable lock store or cache rejects the payload as a form validation error of the host's form;
- the only route the bundle answers itself (`AltchaChallengeController`, GET) writes nothing.

The bundle sends no `X-Conflict-Code` header and no `CONFLICT_001` / `CONFLICT_002` code, and needs no `nowo-tech/transaction-*` dependency.

## Host options

| Option | Default | Effect |
|--------|---------|--------|
| `replay_protection.enabled` | `true` | Single-use payloads |
| `replay_protection.cache_pool` | `cache.app` | PSR-6 pool holding used challenges; must be shared across servers |
| `replay_protection.lock_factory` | `lock.factory` | Symfony Lock factory serializing the check; must use a shared store across servers; `null` = best effort |
| `replay_protection.require_lock` | `false` | `true`: the container fails to build when the lock factory is missing |

Worker mode (FrankenPHP, kernel reset false): the replay state lives in the PSR-6 pool and the lock store, never in process memory; `AltchaVerifier` keeps no mutable state. Locks are created with `autoRelease: false` and released explicitly, so no lock object outlives the check. See [FRANKENPHP-WORKER-AUDIT.md](FRANKENPHP-WORKER-AUDIT.md).

## Tests

- `tests/Integration/Race/ReplayRaceTest.php`: real OS processes (`proc_open`), each with its own cache client (`FilesystemAdapter` on one shared directory) and its own `LockFactory`, verify the same payload at the same instant with a 400 ms pause between the cache read and the write:
  - shared lock store (`FlockStore` on one directory), 4 processes: exactly 1 passes;
  - a local lock store per "server" (`FlockStore` on a directory per process), 2 processes: both pass (documents the multi-server risk above);
  - no lock factory, 2 processes: both pass (documents the best-effort mode);
  - sequential reuse without a lock: rejected.
- `tests/Unit/Service/AltchaVerifierTest.php`: lock acquired and released per verification, fail closed on lock-store and cache failures, release failure keeps the verdict, debug line in best-effort mode.
- `tests/Unit/DependencyInjection/Compiler/ReplayLockPassTest.php`: warning and `require_lock` failure.

## Residual risks

- **Best-effort mode** (no lock factory, `require_lock: false`): two concurrent submissions of one payload can both pass. Accepted: the default keeps hosts without `symfony/lock` working; the warning makes it visible and `require_lock` closes it.
- **Local lock store on several servers**: not atomic across servers (see the table). Configuration, not code; documented and covered by a race test.
- **Lock TTL**: if the two cache calls take longer than 10 s (cache timeouts), the lock can expire and a second process can enter. The window needs a cache that answers but slower than the TTL.
- **Cache eviction**: an LRU pool that evicts the replay item before the challenge expires lets the payload pass again. Use a pool sized for the challenge lifetime (`expires`, at most 1 day).
- **Fail closed on outages**: while the lock store or the cache pool is down, every protected form submission is rejected. This is the intended trade-off for a single-use rule.
