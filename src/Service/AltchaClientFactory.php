<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Service;

use AltchaOrg\Altcha\Algorithm\Argon2id;
use AltchaOrg\Altcha\Algorithm\DeriveKeyInterface;
use AltchaOrg\Altcha\Algorithm\Pbkdf2;
use AltchaOrg\Altcha\Algorithm\Scrypt;
use AltchaOrg\Altcha\Algorithm\Sha;
use AltchaOrg\Altcha\Algorithm\ShaAlgorithm;
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
     * Builds the ALTCHA v3 key-derivation algorithm (PBKDF2 by default).
     *
     * PBKDF2 and SHA use the configured `hmac_algorithm` as hash; ARGON2ID and SCRYPT are memory-hard.
     *
     * @param string $algorithm `PBKDF2`, `SHA`, `ARGON2ID` or `SCRYPT`
     *
     * @throws InvalidArgumentException When the algorithm or hash is unsupported
     *
     * @return DeriveKeyInterface Key-derivation algorithm
     */
    public function createAlgorithm(string $algorithm = 'PBKDF2'): DeriveKeyInterface
    {
        return match ($algorithm) {
            'PBKDF2'   => new Pbkdf2($this->resolveHmacAlgorithm()),
            'SHA'      => new Sha(ShaAlgorithm::from($this->resolveHmacAlgorithm()->value)),
            'ARGON2ID' => new Argon2id(),
            'SCRYPT'   => new Scrypt(),
            default    => throw new InvalidArgumentException(sprintf('Unsupported algorithm "%s".', $algorithm)),
        };
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
