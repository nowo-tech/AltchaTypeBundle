<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Service;

use AltchaOrg\Altcha\Challenge;
use AltchaOrg\Altcha\CreateChallengeOptions;
use AltchaOrg\Altcha\Http\HttpClientInterface;
use AltchaOrg\Altcha\Http\HttpResponse;
use AltchaOrg\Altcha\Payload;
use AltchaOrg\Altcha\SolveChallengeOptions;
use DateTimeImmutable;
use Nowo\AltchaTypeBundle\Profile\AltchaTypeProfileRegistry;
use Nowo\AltchaTypeBundle\Service\AltchaChallengeFactory;
use Nowo\AltchaTypeBundle\Service\AltchaClientFactory;
use Nowo\AltchaTypeBundle\Service\AltchaVerifier;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Psr\Log\NullLogger;
use RuntimeException;
use Symfony\Component\Cache\Adapter\ArrayAdapter;
use Symfony\Component\Clock\MockClock;

use function is_int;
use function str_repeat;

#[CoversClass(AltchaVerifier::class)]
final class AltchaVerifierTest extends TestCase
{
    private const HMAC = 'unit-test-hmac-secret-key-fixed!!';

    /**
     * Fast profiles (tiny PBKDF2 cost, fixed counter) so solving stays cheap in tests.
     *
     * @return array<string, array{cost: int, counter_min: int, counter_max: int, timeout: float, expires: string, floating: bool, hide_logo: bool, hide_footer: bool, algorithm: string, memory_cost: int|null, parallelism: int|null}>
     */
    private function fastProfiles(): array
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

        return ['default' => $profile, 'high' => $profile];
    }

    private function clientFactory(string $algorithm = 'SHA-256'): AltchaClientFactory
    {
        return new AltchaClientFactory(self::HMAC, null, $algorithm);
    }

    private function solve(Challenge $challenge, string $algorithm = 'PBKDF2'): string
    {
        $clientFactory = $this->clientFactory();
        $solution      = $clientFactory->createClient()->solveChallenge(new SolveChallengeOptions(
            algorithm: $clientFactory->createAlgorithm($algorithm),
            challenge: $challenge,
            timeout: 60.0,
        ));
        self::assertNotNull($solution);

        return (new Payload($challenge, $solution))->toBase64();
    }

    private function solvedPayload(string $profile = 'default', ?MockClock $clock = null): string
    {
        $factory = new AltchaChallengeFactory(
            $this->clientFactory(),
            new AltchaTypeProfileRegistry('default', $this->fastProfiles()),
            $clock,
        );

        return $this->solve($factory->create($profile));
    }

    /**
     * @param array<string, mixed> $sentinel
     */
    private function verifier(array $sentinel = [], ?ArrayAdapter $cache = null, ?HttpClientInterface $http = null): AltchaVerifier
    {
        return new AltchaVerifier($this->clientFactory(), true, $sentinel, $cache, new NullLogger(), null, $http);
    }

    /**
     * @param callable(): never|int $status HTTP status, or a callable that throws
     */
    private function sentinelHttp(int|callable $status, string $body = ''): HttpClientInterface
    {
        return new class($status, $body) implements HttpClientInterface {
            /**
             * @param callable(): never|int $status
             */
            public function __construct(private readonly mixed $status, private readonly string $body)
            {
            }

            public function send(string $url, string $method, array $headers, string $body, float $timeout): HttpResponse
            {
                if (!is_int($this->status)) {
                    ($this->status)();
                }

                return new HttpResponse($this->status, $this->body);
            }
        };
    }

    #[Test]
    public function enableFalseAcceptsAnything(): void
    {
        $verifier = new AltchaVerifier($this->clientFactory(), false);

        self::assertTrue($verifier->verify(''));
        self::assertTrue($verifier->verify(null));
    }

    #[Test]
    public function rejectsEmptyNonStringAndOversizedPayloads(): void
    {
        $verifier = $this->verifier();

        self::assertFalse($verifier->verify(''));
        self::assertFalse($verifier->verify(null));
        self::assertFalse($verifier->verify(['x']));
        self::assertFalse($verifier->verify(str_repeat('a', AltchaVerifier::MAX_PAYLOAD_LENGTH + 1)));
    }

    #[Test]
    public function rejectsMalformedPayloads(): void
    {
        $verifier = $this->verifier();

        self::assertFalse($verifier->verify('%%%not-base64%%%'));
        self::assertFalse($verifier->verify(base64_encode('not json')));
        self::assertFalse($verifier->verify(base64_encode('{"challenge":1}')));
    }

    #[Test]
    public function acceptsValidSolutionOnceWithReplayCache(): void
    {
        $verifier = $this->verifier(cache: new ArrayAdapter());
        $payload  = $this->solvedPayload();

        self::assertTrue($verifier->verify($payload, 'default'));
        self::assertFalse($verifier->verify($payload, 'default'), 'A solved challenge must not be reusable.');
    }

    #[Test]
    public function withoutReplayCacheReuseIsAccepted(): void
    {
        $verifier = $this->verifier();
        $payload  = $this->solvedPayload();

        self::assertTrue($verifier->verify($payload));
        self::assertTrue($verifier->verify($payload));
    }

    #[Test]
    public function rejectsSolutionIssuedForAnotherProfile(): void
    {
        $payload = $this->solvedPayload('default');

        self::assertFalse($this->verifier()->verify($payload, 'high'));
        self::assertTrue($this->verifier()->verify($payload, 'default'));
    }

    #[Test]
    public function rejectsChallengeWithoutExpiry(): void
    {
        $clientFactory = $this->clientFactory();
        $challenge     = $clientFactory->createClient()->createChallenge(new CreateChallengeOptions(
            algorithm: $clientFactory->createAlgorithm(),
            cost: 10,
            counter: 3,
        ));

        self::assertFalse($this->verifier()->verify($this->solve($challenge)));
    }

    #[Test]
    public function rejectsExpiredChallenge(): void
    {
        $payload = $this->solvedPayload('default', new MockClock(new DateTimeImmutable('-2 hours')));

        self::assertFalse($this->verifier()->verify($payload));
    }

    #[Test]
    public function rejectsChallengeSignedWithAnotherKey(): void
    {
        $payload  = $this->solvedPayload();
        $verifier = new AltchaVerifier(new AltchaClientFactory('another-secret-key-of-32-chars!!', null, 'SHA-256'), true);

        self::assertFalse($verifier->verify($payload));
    }

    #[Test]
    public function verificationErrorsFailClosed(): void
    {
        $verifier = new AltchaVerifier($this->clientFactory('MD5'), true, [], null, new NullLogger());

        self::assertFalse($verifier->verify($this->solvedPayload()));
    }

    #[Test]
    public function sentinelVerdictIsFinal(): void
    {
        $sentinel = ['enabled' => true, 'base_url' => 'https://sentinel.test/', 'api_key' => 'k', 'retries' => 0, 'fallback_local' => true];
        $payload  = $this->solvedPayload();

        self::assertTrue($this->verifier($sentinel, http: $this->sentinelHttp(200, '{"verified":true}'))->verify('opaque'));
        self::assertFalse($this->verifier($sentinel, http: $this->sentinelHttp(200, '{"verified":false}'))->verify($payload));
        self::assertFalse($this->verifier($sentinel, http: $this->sentinelHttp(400, '{"error":"INVALID"}'))->verify($payload));
    }

    #[Test]
    public function sentinelTransportFailureWithoutFallbackFailsClosed(): void
    {
        $sentinel = ['enabled' => true, 'base_url' => 'https://sentinel.test', 'retries' => 0];

        self::assertFalse($this->verifier($sentinel, http: $this->sentinelHttp(503))->verify($this->solvedPayload()));
    }

    #[Test]
    public function sentinelTransportFailureFallsBackToLocalWhenAllowed(): void
    {
        $sentinel = ['enabled' => true, 'base_url' => 'https://sentinel.test', 'retries' => 0, 'fallback_local' => true];
        $throwing = $this->sentinelHttp(static function (): never {
            throw new RuntimeException('timeout');
        });

        self::assertTrue($this->verifier($sentinel, http: $throwing)->verify($this->solvedPayload()));
        self::assertTrue($this->verifier($sentinel, http: $this->sentinelHttp(200, 'not json'))->verify($this->solvedPayload()));
    }

    #[Test]
    public function sentinelWithoutBaseUrlUsesLocalVerification(): void
    {
        self::assertTrue($this->verifier(['enabled' => true, 'base_url' => ''])->verify($this->solvedPayload()));
    }

    /**
     * Profiles where "default" is PBKDF2 and "memory_hard" is a tiny Argon2id (ALTCHA v3).
     */
    private function v3Registry(): AltchaTypeProfileRegistry
    {
        $profiles                = $this->fastProfiles();
        $profiles['memory_hard'] = [
            'cost'        => 1,
            'counter_min' => 2,
            'counter_max' => 2,
            'algorithm'   => 'ARGON2ID',
            'memory_cost' => 1024,
        ] + $profiles['default'];

        return new AltchaTypeProfileRegistry('default', $profiles);
    }

    private function v3Verifier(AltchaTypeProfileRegistry $registry): AltchaVerifier
    {
        return new AltchaVerifier($this->clientFactory(), true, [], new ArrayAdapter(), new NullLogger(), null, null, $registry);
    }

    #[Test]
    public function verifiesArgon2idChallengeOfItsProfile(): void
    {
        $registry  = $this->v3Registry();
        $challenge = (new AltchaChallengeFactory($this->clientFactory(), $registry))->create('memory_hard');
        self::assertSame('ARGON2ID', $challenge->parameters->algorithm);
        self::assertSame(1024, $challenge->parameters->memoryCost);

        $payload  = $this->solve($challenge, 'ARGON2ID');
        $verifier = $this->v3Verifier($registry);

        self::assertTrue($verifier->verify($payload, 'memory_hard'));
        self::assertFalse($verifier->verify($payload, 'memory_hard'), 'Replay must still be rejected.');
    }

    #[Test]
    public function usesSignedProfileWhenNoProfileIsExpected(): void
    {
        $registry = $this->v3Registry();
        $payload  = $this->solve((new AltchaChallengeFactory($this->clientFactory(), $registry))->create('memory_hard'), 'ARGON2ID');

        self::assertTrue($this->v3Verifier($registry)->verify($payload));
    }

    #[Test]
    public function rejectsAlgorithmOtherThanTheProfileAlgorithm(): void
    {
        // Challenge issued while "default" was PBKDF2, verified after "default" switched to Argon2id.
        $payload = $this->solvedPayload();

        $profiles            = $this->fastProfiles();
        $profiles['default'] = ['cost' => 1, 'algorithm' => 'ARGON2ID', 'memory_cost' => 1024] + $profiles['default'];

        self::assertFalse($this->v3Verifier(new AltchaTypeProfileRegistry('default', $profiles))->verify($payload, 'default'));
    }

    #[Test]
    public function rejectsChallengeOfUnknownSignedProfile(): void
    {
        $payload  = $this->solvedPayload('high');
        $profiles = $this->fastProfiles();
        unset($profiles['high']);

        self::assertFalse($this->v3Verifier(new AltchaTypeProfileRegistry('default', $profiles))->verify($payload));
    }
}
