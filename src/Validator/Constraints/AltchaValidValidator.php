<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Validator\Constraints;

use Nowo\AltchaTypeBundle\Service\AltchaVerifier;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;

/**
 * Constraint validator that delegates to {@see AltchaVerifier}.
 */
final class AltchaValidValidator extends ConstraintValidator
{
    /**
     * @param AltchaVerifier $verifier Payload verifier
     */
    public function __construct(
        private readonly AltchaVerifier $verifier,
    ) {
    }

    /**
     * Adds a violation when the payload is not a valid, unused solution for the expected profile.
     *
     * @param mixed $value Submitted payload
     * @param Constraint $constraint Must be an {@see AltchaValid}
     */
    public function validate(mixed $value, Constraint $constraint): void
    {
        if (!$constraint instanceof AltchaValid) {
            throw new UnexpectedTypeException($constraint, AltchaValid::class);
        }

        if ($this->verifier->verify($value, $constraint->profile)) {
            return;
        }

        $this->context->buildViolation($constraint->message)
            ->setTranslationDomain(AltchaValid::TRANSLATION_DOMAIN)
            ->addViolation();
    }
}
