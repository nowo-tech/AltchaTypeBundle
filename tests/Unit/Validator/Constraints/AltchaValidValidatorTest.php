<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Validator\Constraints;

use Nowo\AltchaTypeBundle\Service\AltchaClientFactory;
use Nowo\AltchaTypeBundle\Service\AltchaVerifier;
use Nowo\AltchaTypeBundle\Validator\Constraints\AltchaValid;
use Nowo\AltchaTypeBundle\Validator\Constraints\AltchaValidValidator;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Test\ConstraintValidatorTestCase;

/**
 * @extends ConstraintValidatorTestCase<AltchaValidValidator>
 */
#[CoversClass(AltchaValidValidator::class)]
final class AltchaValidValidatorTest extends ConstraintValidatorTestCase
{
    protected function createValidator(): AltchaValidValidator
    {
        return new AltchaValidValidator(new AltchaVerifier(
            new AltchaClientFactory('test-secret', null, 'SHA-256'),
            false,
        ));
    }

    #[Test]
    public function acceptsWhenVerifierEnabledFalse(): void
    {
        $this->validator->validate('', new AltchaValid());
        $this->assertNoViolation();
    }

    #[Test]
    public function rejectsWrongConstraintType(): void
    {
        $this->expectException(UnexpectedTypeException::class);
        $this->validator->validate('x', new NotBlank());
    }

    #[Test]
    public function addsViolationWhenPayloadIsInvalid(): void
    {
        $this->validator = new AltchaValidValidator(new AltchaVerifier(
            new AltchaClientFactory('test-secret', null, 'SHA-256'),
            true,
        ));
        $this->validator->initialize($this->context);

        $constraint = new AltchaValid(profile: 'default');
        self::assertSame('default', $constraint->profile);
        $this->validator->validate('not-a-valid-payload', $constraint);

        $this->buildViolation($constraint->message)
            ->setTranslationDomain(AltchaValid::TRANSLATION_DOMAIN)
            ->assertRaised();
    }
}
