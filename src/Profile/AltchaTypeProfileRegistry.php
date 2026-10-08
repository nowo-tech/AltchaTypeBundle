<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Profile;

use InvalidArgumentException;

use function sprintf;

/**
 * Resolves named Altcha Type profiles from bundle configuration.
 *
 * @phpstan-type Profile array{
 *     cost: int,
 *     counter_min: int,
 *     counter_max: int,
 *     timeout: float,
 *     expires: string,
 *     floating: bool,
 *     hide_logo: bool,
 *     hide_footer: bool,
 *     algorithm: string,
 *     memory_cost: int|null,
 *     parallelism: int|null
 * }
 */
final class AltchaTypeProfileRegistry
{
    /**
     * @param string $defaultProfile Name used when no profile is requested
     * @param array<string, Profile> $profiles Profiles keyed by name
     */
    public function __construct(
        private readonly string $defaultProfile,
        private readonly array $profiles,
    ) {
    }

    /**
     * Returns the default profile name.
     *
     * @return string Default profile name
     */
    public function getDefaultProfileName(): string
    {
        return $this->defaultProfile;
    }

    /**
     * Returns every configured profile.
     *
     * @return array<string, Profile> Profiles keyed by name
     */
    public function all(): array
    {
        return $this->profiles;
    }

    /**
     * Whether a profile with this name exists.
     *
     * @param string $name Profile name
     *
     * @return bool True when configured
     */
    public function has(string $name): bool
    {
        return isset($this->profiles[$name]);
    }

    /**
     * Returns a profile by name (default profile when null).
     *
     * @param string|null $name Profile name or null
     *
     * @throws InvalidArgumentException When the profile does not exist
     *
     * @return Profile Profile settings
     */
    public function get(?string $name = null): array
    {
        $key = $name ?? $this->defaultProfile;
        if (!isset($this->profiles[$key])) {
            throw new InvalidArgumentException(sprintf('Unknown altcha-type profile "%s".', $key));
        }

        return $this->profiles[$key];
    }
}
