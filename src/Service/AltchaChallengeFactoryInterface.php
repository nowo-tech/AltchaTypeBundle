<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Service;

use InvalidArgumentException;

/**
 * Port: creates signed ALTCHA challenges for the widget challenge endpoint.
 *
 * The bundle ships {@see AltchaChallengeFactory} and aliases this interface to it. A host replaces the alias to issue
 * challenges differently. `createArray()` is the port: it returns the JSON-ready shape and carries no vendor type. The shipped
 * class also has `create()`, which returns the vendor `Challenge`; it is not part of the port.
 */
interface AltchaChallengeFactoryInterface
{
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
