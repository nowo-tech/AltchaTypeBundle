<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Service;

use AltchaOrg\Altcha\Challenge;
use AltchaOrg\Altcha\CreateChallengeOptions;
use InvalidArgumentException;
use Nowo\AltchaTypeBundle\Profile\AltchaTypeProfileRegistry;
use Psr\Clock\ClockInterface;
use Random\RandomException;
use Symfony\Component\Clock\NativeClock;

/**
 * Creates signed ALTCHA challenges for the widget challenge endpoint.
 *
 * The resolved profile name is embedded in the signed challenge `data` so the verifier can
 * reject solutions issued for a different (e.g. cheaper) profile.
 */
final class AltchaChallengeFactory
{
    /** @var string Key of the profile name inside the signed challenge `data`. */
    public const DATA_PROFILE_KEY = 'profile';

    private readonly ClockInterface $clock;

    /**
     * @param AltchaClientFactory $clientFactory Builds the Altcha client and PBKDF2 algorithm
     * @param AltchaTypeProfileRegistry $profiles Named difficulty profiles
     * @param ClockInterface|null $clock Clock used for challenge expiry (defaults to the native clock)
     */
    public function __construct(
        private readonly AltchaClientFactory $clientFactory,
        private readonly AltchaTypeProfileRegistry $profiles,
        ?ClockInterface $clock = null,
    ) {
        $this->clock = $clock ?? new NativeClock();
    }

    /**
     * Creates a signed challenge for the given profile (default profile when null).
     *
     * @param string|null $profileName Profile name, or null for the default profile
     *
     * @throws InvalidArgumentException When the profile does not exist
     * @throws RandomException When no secure randomness is available
     *
     * @return Challenge The signed challenge (serialize with `toArray()`)
     */
    public function create(?string $profileName = null): Challenge
    {
        $name    = $profileName ?? $this->profiles->getDefaultProfileName();
        $profile = $this->profiles->get($name);
        $client  = $this->clientFactory->createClient();
        $algo    = $this->clientFactory->createAlgorithm();

        $counterMin = $profile['counter_min'];
        $counterMax = $profile['counter_max'];
        $counter    = $counterMin === $counterMax
            ? $counterMin
            : random_int($counterMin, $counterMax);

        return $client->createChallenge(new CreateChallengeOptions(
            algorithm: $algo,
            cost: $profile['cost'],
            counter: $counter,
            expiresAt: $this->clock->now()->modify($profile['expires']),
            data: [self::DATA_PROFILE_KEY => $name],
        ));
    }
}
