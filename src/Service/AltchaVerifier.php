<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Service;

use AltchaOrg\Altcha\Http\HttpClientInterface;
use AltchaOrg\Altcha\Payload;
use AltchaOrg\Altcha\Sentinel;
use AltchaOrg\Altcha\VerifyServerOptions;
use AltchaOrg\Altcha\VerifySolutionOptions;
use InvalidArgumentException;
use Nowo\AltchaTypeBundle\Profile\AltchaTypeProfileRegistry;
use Nowo\AltchaTypeBundle\Service\Sentinel\TransportTrackingHttpClient;
use Psr\Cache\CacheItemPoolInterface;
use Psr\Clock\ClockInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\Clock\NativeClock;
use Throwable;

use function is_string;
use function strlen;

/**
 * Verifies ALTCHA payloads submitted by the widget (local proof-of-work or optional Sentinel).
 *
 * Local verification enforces, in order: payload size, expiry presence, the profile signed into the
 * challenge, the profile's v3 algorithm (PBKDF2/SHA/ARGON2ID/SCRYPT), signature + expiry + solution
 * (altcha-org), and single use (replay cache) when a pool is configured.
 */
final class AltchaVerifier
{
    /** @var int Maximum accepted payload length in bytes (a genuine payload is well under 1 KiB). */
    public const MAX_PAYLOAD_LENGTH = 4096;

    /** @var string Prefix of replay-cache keys. */
    private const REPLAY_KEY_PREFIX = 'nowo_altcha_type.used.';

    private readonly ClockInterface $clock;

    /**
     * @param AltchaClientFactory $clientFactory Builds the Altcha client and key-derivation algorithm
     * @param bool $enable When false, every payload is accepted (test environments only)
     * @param array{enabled?: bool, base_url?: string|null, api_key?: string|null, timeout?: float, retries?: int, fallback_local?: bool} $sentinel Optional Sentinel settings
     * @param CacheItemPoolInterface|null $replayCache Pool remembering used challenges (null disables replay protection)
     * @param LoggerInterface|null $logger PSR-3 logger (never receives payloads or secrets)
     * @param ClockInterface|null $clock Clock for replay-cache TTLs (defaults to the native clock)
     * @param HttpClientInterface|null $sentinelHttpClient HTTP client for Sentinel (defaults to the altcha-org stream client)
     * @param AltchaTypeProfileRegistry|null $profiles Profiles (select the v3 algorithm; PBKDF2 when null)
     */
    public function __construct(
        private readonly AltchaClientFactory $clientFactory,
        private readonly bool $enable,
        private readonly array $sentinel = [],
        private readonly ?CacheItemPoolInterface $replayCache = null,
        private readonly ?LoggerInterface $logger = null,
        ?ClockInterface $clock = null,
        private readonly ?HttpClientInterface $sentinelHttpClient = null,
        private readonly ?AltchaTypeProfileRegistry $profiles = null,
    ) {
        $this->clock = $clock ?? new NativeClock();
    }

    /**
     * Returns true when the payload is a valid, unused solution for the expected profile (or when enable=false).
     *
     * @param mixed $payload Raw submitted value (base64 JSON string from the widget)
     * @param string|null $expectedProfile Profile the form field was rendered with (null skips the profile check)
     *
     * @return bool Whether the submission passes
     */
    public function verify(mixed $payload, ?string $expectedProfile = null): bool
    {
        if (!$this->enable) {
            return true;
        }

        if (!is_string($payload) || $payload === '' || strlen($payload) > self::MAX_PAYLOAD_LENGTH) {
            return false;
        }

        if ($this->isSentinelEnabled()) {
            $sentinelResult = $this->verifyViaSentinel($payload);
            if ($sentinelResult !== null) {
                return $sentinelResult;
            }
            if (($this->sentinel['fallback_local'] ?? false) !== true) {
                return false;
            }
            $this->logger?->warning('ALTCHA Sentinel unreachable; falling back to local verification (sentinel.fallback_local).');
        }

        return $this->verifyLocally($payload, $expectedProfile);
    }

    /**
     * Verifies the proof-of-work locally and consumes the challenge.
     *
     * @param string $payload Base64 payload
     * @param string|null $expectedProfile Expected profile name or null
     *
     * @return bool Whether the payload is valid and unused
     */
    private function verifyLocally(string $payload, ?string $expectedProfile): bool
    {
        try {
            $decoded = Payload::fromBase64($payload);
        } catch (InvalidArgumentException $e) {
            $this->logger?->info('ALTCHA payload rejected: {message}', ['message' => $e->getMessage()]);

            return false;
        }

        $parameters = $decoded->challenge->parameters;
        if ($parameters->expiresAt === null) {
            $this->logger?->info('ALTCHA payload rejected: challenge without expiry.');

            return false;
        }

        if ($expectedProfile !== null && ($parameters->data[AltchaChallengeFactory::DATA_PROFILE_KEY] ?? null) !== $expectedProfile) {
            $this->logger?->info('ALTCHA payload rejected: challenge issued for another profile.');

            return false;
        }

        $signedProfile = $parameters->data[AltchaChallengeFactory::DATA_PROFILE_KEY] ?? null;
        $algorithmName = $this->resolveAlgorithmName($expectedProfile ?? (is_string($signedProfile) ? $signedProfile : null));
        if ($algorithmName === null) {
            $this->logger?->info('ALTCHA payload rejected: unknown profile.');

            return false;
        }

        try {
            $algorithm = $this->clientFactory->createAlgorithm($algorithmName);
            // The server decides the algorithm from the profile; never trust the client-provided name.
            if ($parameters->algorithm !== $algorithm->getAlgorithmName()) {
                $this->logger?->info('ALTCHA payload rejected: unexpected algorithm.');

                return false;
            }

            $result = $this->clientFactory->createClient()->verifySolution(new VerifySolutionOptions(
                payload: $decoded,
                algorithm: $algorithm,
            ));
        } catch (Throwable $e) {
            $this->logger?->warning('ALTCHA verification error: {message}', ['message' => $e->getMessage()]);

            return false;
        }

        if (!$result->verified) {
            return false;
        }

        return $this->consume((string) $decoded->challenge->signature, (float) $parameters->expiresAt);
    }

    /**
     * Resolves the key-derivation algorithm configured for a profile (PBKDF2 without a registry).
     *
     * @param string|null $profileName Expected or signed profile name
     *
     * @return string|null Algorithm name, or null when the profile is unknown
     */
    private function resolveAlgorithmName(?string $profileName): ?string
    {
        if (!$this->profiles instanceof AltchaTypeProfileRegistry || $profileName === null) {
            return 'PBKDF2';
        }

        return $this->profiles->has($profileName) ? $this->profiles->get($profileName)['algorithm'] : null;
    }

    /**
     * Marks a verified challenge as used; returns false when it was already used.
     *
     * @param string $signature Challenge signature (unique per challenge)
     * @param float $expiresAt Challenge expiry as a UNIX timestamp
     *
     * @return bool True on first use
     */
    private function consume(string $signature, float $expiresAt): bool
    {
        if (!$this->replayCache instanceof CacheItemPoolInterface) {
            return true;
        }

        $item = $this->replayCache->getItem(self::REPLAY_KEY_PREFIX . hash('sha256', $signature));
        if ($item->isHit()) {
            $this->logger?->info('ALTCHA payload rejected: challenge already used (replay).');

            return false;
        }

        $ttl = (int) ceil($expiresAt - (float) $this->clock->now()->format('U.u'));
        $item->set(true)->expiresAfter(max(1, $ttl));
        $this->replayCache->save($item);

        return true;
    }

    /**
     * Verifies through ALTCHA Sentinel.
     *
     * @param string $payload Base64 payload
     *
     * @return bool|null Sentinel verdict, or null on transport failure
     */
    private function verifyViaSentinel(string $payload): ?bool
    {
        $url = rtrim((string) ($this->sentinel['base_url'] ?? ''), '/') . '/v1/verify/signature';

        $this->logger?->debug('ALTCHA Sentinel verification started.');

        $httpClient = new TransportTrackingHttpClient($this->sentinelHttpClient);

        // Sentinel::verify() never throws: transport errors surface through the tracking client.
        $result = Sentinel::verify(new VerifyServerOptions(
            payload: $payload,
            url: $url,
            secret: $this->sentinel['api_key'] ?? null,
            httpClient: $httpClient,
            timeout: (float) ($this->sentinel['timeout'] ?? 5.0),
            retries: (int) ($this->sentinel['retries'] ?? 1),
        ));

        if (!$result->verified && $httpClient->hasTransportFailed()) {
            $this->logger?->warning('ALTCHA Sentinel request failed: {reason}', ['reason' => $result->reason]);

            return null;
        }

        $this->logger?->debug('ALTCHA Sentinel verification finished.', ['verified' => $result->verified]);

        return $result->verified;
    }

    /**
     * Whether Sentinel verification is configured.
     *
     * @return bool True when enabled with a base URL
     */
    private function isSentinelEnabled(): bool
    {
        return ($this->sentinel['enabled'] ?? false) === true
            && is_string($this->sentinel['base_url'] ?? null)
            && $this->sentinel['base_url'] !== '';
    }
}
