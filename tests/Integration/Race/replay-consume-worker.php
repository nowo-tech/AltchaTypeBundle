<?php

declare(strict_types=1);

/*
 * One "server process" of the replay race test (ReplayRaceTest): verifies a payload with its own cache
 * client (FilesystemAdapter on a shared directory) and its own lock factory, and prints "1" (accepted)
 * or "0" (rejected).
 *
 * Usage: php replay-consume-worker.php <payload> <cache-dir> <none|flock> <lock-dir> <start-at> <delay-ms>
 *  - lock-dir: the same directory for every process = one shared lock store; a directory per process =
 *    a local lock store per server (what `flock`/`semaphore` give on a multi-server deploy).
 *  - start-at: UNIX time (float) at which every process starts verifying (barrier).
 *  - delay-ms: pause between the cache read and the cache write, widening the race window.
 */

use Nowo\AltchaTypeBundle\Service\AltchaClientFactory;
use Nowo\AltchaTypeBundle\Service\AltchaVerifier;
use Nowo\AltchaTypeBundle\Tests\Integration\Race\ReplayRaceTest;
use Nowo\AltchaTypeBundle\Tests\Integration\Race\SlowCachePool;
use Psr\Log\NullLogger;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\Lock\LockFactory;
use Symfony\Component\Lock\Store\FlockStore;

require dirname(__DIR__, 3) . '/vendor/autoload.php';

[, $payload, $cacheDir, $lockMode, $lockDir, $startAt, $delayMs] = $argv;

$cache = new SlowCachePool(new FilesystemAdapter('altcha_race', 0, $cacheDir), (int) $delayMs);
$locks = $lockMode === 'flock' ? new LockFactory(new FlockStore($lockDir)) : null;

$verifier = new AltchaVerifier(
    new AltchaClientFactory(ReplayRaceTest::HMAC, null, 'SHA-256'),
    true,
    [],
    $cache,
    new NullLogger(),
    null,
    null,
    null,
    $locks,
);

while (microtime(true) < (float) $startAt) {
    usleep(1000);
}

echo $verifier->verify($payload) ? '1' : '0';
