<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Integration\Race;

use AltchaOrg\Altcha\Payload;
use AltchaOrg\Altcha\SolveChallengeOptions;
use Nowo\AltchaTypeBundle\Profile\AltchaTypeProfileRegistry;
use Nowo\AltchaTypeBundle\Service\AltchaChallengeFactory;
use Nowo\AltchaTypeBundle\Service\AltchaClientFactory;
use PHPUnit\Framework\Attributes\CoversNothing;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Process\Process;

use function sprintf;

use const PHP_BINARY;

/**
 * REQ-RUNTIME-003: real replay race between OS processes (one PHP process per "server"), each with its own
 * cache client on one shared cache directory. The single-use rule must let exactly one submission through
 * when the lock store is shared; with no lock or a local lock store per server, the race is real (both pass),
 * which is the residual risk documented in docs/CONCURRENCY.md.
 */
#[CoversNothing]
final class ReplayRaceTest extends TestCase
{
    public const HMAC = 'race-test-hmac-secret-key-fixed!!!';

    /** @var int Pause between the cache read and write in each process (ms). */
    private const DELAY_MS = 400;

    /** @var float Hard limit per worker process (s). */
    private const WORKER_TIMEOUT = 30.0;

    private string $dir;

    protected function setUp(): void
    {
        $this->dir = sys_get_temp_dir() . '/altcha-race-' . bin2hex(random_bytes(6));
        mkdir($this->dir . '/cache', 0o777, true);
    }

    protected function tearDown(): void
    {
        (new Filesystem())->remove($this->dir);
    }

    #[Test]
    public function sharedLockStoreLetsExactlyOneOfFourProcessesConsumeTheChallenge(): void
    {
        $results = $this->race(4, 'flock', static fn (int $i): string => 'shared');

        self::assertSame(1, array_sum($results), 'Exactly one process may consume the challenge: ' . implode(',', $results));
    }

    #[Test]
    public function localLockStorePerServerDoesNotPreventTheRace(): void
    {
        // Two servers, one shared cache pool, but each with its own (local) lock store.
        $results = $this->race(2, 'flock', static fn (int $i): string => 'server-' . $i);

        self::assertSame([1, 1], $results, 'A local lock store per server cannot serialize the replay check.');
    }

    #[Test]
    public function withoutLockFactoryTheCheckIsBestEffort(): void
    {
        $results = $this->race(2, 'none', static fn (int $i): string => 'unused');

        self::assertSame([1, 1], $results, 'Without a lock the read-check-write window lets both pass.');
    }

    #[Test]
    public function sequentialReplayIsRejectedWithoutAnyLock(): void
    {
        $payload = $this->solvedPayload();

        self::assertSame('1', $this->runOnce($payload, 'none', 'unused'));
        self::assertSame('0', $this->runOnce($payload, 'none', 'unused'));
    }

    /**
     * Starts $processes workers that verify the same payload at the same instant.
     *
     * @param callable(int): string $lockDirFor Lock directory name per process index
     *
     * @return list<int> 1 accepted / 0 rejected, per process
     */
    private function race(int $processes, string $lockMode, callable $lockDirFor): array
    {
        $payload = $this->solvedPayload();
        $startAt = microtime(true) + 3.0;
        $procs   = [];
        for ($i = 0; $i < $processes; ++$i) {
            $procs[] = $this->start($payload, $lockMode, $lockDirFor($i), $startAt, self::DELAY_MS);
        }

        return array_map(fn (Process $process): int => (int) $this->finish($process), $procs);
    }

    private function runOnce(string $payload, string $lockMode, string $lockDir): string
    {
        return $this->finish($this->start($payload, $lockMode, $lockDir, 0.0, 0));
    }

    private function start(string $payload, string $lockMode, string $lockDir, float $startAt, int $delayMs): Process
    {
        $lockPath = $this->dir . '/locks/' . $lockDir;
        if (!is_dir($lockPath)) {
            mkdir($lockPath, 0o777, true);
        }

        $process = new Process([
            PHP_BINARY,
            __DIR__ . '/replay-consume-worker.php',
            $payload,
            $this->dir . '/cache',
            $lockMode,
            $lockPath,
            sprintf('%.6F', $startAt),
            (string) $delayMs,
        ]);
        // A hung worker (lock never released) fails fast instead of holding the machine.
        $process->setTimeout(self::WORKER_TIMEOUT);
        $process->start();

        return $process;
    }

    private function finish(Process $process): string
    {
        $process->wait();
        $out = $process->getOutput();

        self::assertSame(0, $process->getExitCode(), 'Race worker failed: ' . $process->getErrorOutput() . $out);
        self::assertContains($out, ['0', '1'], 'Unexpected worker output: ' . $out . $process->getErrorOutput());

        return $out;
    }

    private function solvedPayload(): string
    {
        $profile = [
            'cost'        => 10,
            'counter_min' => 3,
            'counter_max' => 3,
            'timeout'     => 30.0,
            'expires'     => '+1 hour',
            'floating'    => false,
            'hide_logo'   => false,
            'hide_footer' => false,
            'algorithm'   => 'PBKDF2',
            'memory_cost' => null,
            'parallelism' => null,
        ];
        $clientFactory = new AltchaClientFactory(self::HMAC, null, 'SHA-256');
        $challenge     = (new AltchaChallengeFactory($clientFactory, new AltchaTypeProfileRegistry('default', ['default' => $profile])))->create('default');
        $solution      = $clientFactory->createClient()->solveChallenge(new SolveChallengeOptions(
            algorithm: $clientFactory->createAlgorithm('PBKDF2'),
            challenge: $challenge,
            timeout: 60.0,
        ));
        self::assertNotNull($solution);

        return (new Payload($challenge, $solution))->toBase64();
    }
}
