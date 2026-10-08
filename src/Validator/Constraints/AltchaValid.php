<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Validator\Constraints;

use Attribute;
use Symfony\Component\Validator\Constraint;

/**
 * Validates that a submitted ALTCHA widget payload is a genuine, unused proof-of-work solution.
 *
 * When `profile` is set, the solution must come from a challenge issued for that profile
 * (prevents solving a cheaper profile's challenge). AltchaType sets it automatically.
 */
#[Attribute(Attribute::TARGET_PROPERTY | Attribute::TARGET_METHOD | Attribute::IS_REPEATABLE)]
final class AltchaValid extends Constraint
{
    public const TRANSLATION_DOMAIN = 'NowoAltchaTypeBundle';

    public string $message = 'form.error.invalid';

    public ?string $profile;

    /**
     * @param string|null $message Translation key of the violation message (domain NowoAltchaTypeBundle)
     * @param list<string>|null $groups Validation groups
     * @param mixed $payload Constraint payload
     * @param string|null $profile Expected challenge profile, or null to accept any profile
     */
    public function __construct(?string $message = null, ?array $groups = null, mixed $payload = null, ?string $profile = null)
    {
        parent::__construct(null, $groups, $payload);
        if ($message !== null) {
            $this->message = $message;
        }
        $this->profile = $profile;
    }

    /**
     * Returns the validator service id.
     *
     * @return string Validator class name
     */
    public function validatedBy(): string
    {
        return AltchaValidValidator::class;
    }
}
