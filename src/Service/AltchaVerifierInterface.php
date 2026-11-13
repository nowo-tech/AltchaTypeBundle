<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Service;

/**
 * Port: verifies ALTCHA payloads submitted by the widget.
 *
 * The bundle ships {@see AltchaVerifier} (local proof-of-work, optional Sentinel, replay protection) and aliases this
 * interface to it. A host replaces the alias to plug its own verification (for example a fake in tests, or a verifier
 * backed by another service) without touching the validator or the form type.
 */
interface AltchaVerifierInterface
{
    /**
     * Returns true when the payload is a valid, unused solution for the expected profile.
     *
     * @param mixed $payload Raw submitted value (base64 JSON string from the widget)
     * @param string|null $expectedProfile Profile the form field was rendered with (null skips the profile check)
     *
     * @return bool Whether the submission passes
     */
    public function verify(mixed $payload, ?string $expectedProfile = null): bool;
}
