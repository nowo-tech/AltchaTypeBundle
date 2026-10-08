<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Service;

use AltchaOrg\Altcha\Algorithm\Pbkdf2;
use AltchaOrg\Altcha\Altcha;
use AltchaOrg\Altcha\HmacAlgorithm;
use InvalidArgumentException;

use function sprintf;

/**
 * Builds configured Altcha client + PBKDF2 algorithm instances (stateless / FrankenPHP-safe).
 */
final class AltchaClientFactory
{
    /**
     * @param string $hmacSignature Secret signing challenges
     * @param string|null $hmacKeySignature Optional key-signature secret (fast verification)
     * @param string $hmacAlgorithm `SHA-256`, `SHA-384` or `SHA-512`
     */
    public function __construct(
        private readonly string $hmacSignature,
        private readonly ?string $hmacKeySignature,
        private readonly string $hmacAlgorithm,
    ) {
    }

    /**
     * Returns the configured challenge signing secret.
     *
     * @return string HMAC secret
     */
    public function getHmacSignature(): string
    {
        return $this->hmacSignature;
    }

    /**
     * Builds an Altcha client with the configured secrets.
     *
     * @throws InvalidArgumentException When the HMAC algorithm is unsupported
     *
     * @return Altcha Altcha client
     */
    public function createClient(): Altcha
    {
        return new Altcha(
            hmacSignatureSecret: $this->hmacSignature,
            hmacKeySignatureSecret: $this->hmacKeySignature,
            hmacAlgorithm: $this->resolveHmacAlgorithm(),
        );
    }

    /**
     * Builds the PBKDF2 key-derivation algorithm.
     *
     * @throws InvalidArgumentException When the HMAC algorithm is unsupported
     *
     * @return Pbkdf2 PBKDF2 algorithm
     */
    public function createAlgorithm(): Pbkdf2
    {
        return new Pbkdf2($this->resolveHmacAlgorithm());
    }

    /**
     * Maps the configured algorithm name to the altcha-org enum.
     *
     * @return HmacAlgorithm Algorithm
     */
    private function resolveHmacAlgorithm(): HmacAlgorithm
    {
        return match ($this->hmacAlgorithm) {
            'SHA-256' => HmacAlgorithm::SHA256,
            'SHA-384' => HmacAlgorithm::SHA384,
            'SHA-512' => HmacAlgorithm::SHA512,
            default   => throw new InvalidArgumentException(sprintf('Unsupported hmac_algorithm "%s".', $this->hmacAlgorithm)),
        };
    }
}
