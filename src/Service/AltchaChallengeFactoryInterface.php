<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Service;

use AltchaOrg\Altcha\Challenge;
use InvalidArgumentException;

/**
 * Port: creates signed ALTCHA challenges for the widget challenge endpoint.
 *
 * The bundle ships {@see AltchaChallengeFactory} and aliases this interface to it. A host replaces the alias to issue
 * challenges differently. Prefer {@see self::createArray()} when you only need the JSON-ready shape: it carries no
 * vendor type.
 */
interface AltchaChallengeFactoryInterface
{
    /**
     * Creates a signed challenge for the given profile (default profile when null).
     *
     * @param string|null $profileName Profile name, or null for the default profile
     *
     * @throws InvalidArgumentException When the profile does not exist
     *
     * @return Challenge The signed challenge
     */
    public function create(?string $profileName = null): Challenge;

    /**
     * Creates a signed challenge and returns it as the plain array the widget consumes (JSON-ready).
     *
     * @param string|null $profileName Profile name, or null for the default profile
     *
     * @throws InvalidArgumentException When the profile does not exist
     *
     * @return array<string, mixed> The challenge as an array
     */
    public function createArray(?string $profileName = null): array;
}
