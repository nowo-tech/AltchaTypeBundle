<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Validator\Constraints;

use Nowo\AltchaTypeBundle\Validator\Constraints\AltchaValid;
use Nowo\AltchaTypeBundle\Validator\Constraints\AltchaValidValidator;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

#[CoversClass(AltchaValid::class)]
final class AltchaValidTest extends TestCase
{
    #[Test]
    public function defaultsAndOverrides(): void
    {
        $default = new AltchaValid();
        self::assertSame('form.error.invalid', $default->message);
        self::assertNull($default->profile);
        self::assertSame(AltchaValidValidator::class, $default->validatedBy());

        $custom = new AltchaValid('custom.key', ['strict'], null, 'high');
        self::assertSame('custom.key', $custom->message);
        self::assertSame('high', $custom->profile);
        self::assertSame(['strict'], $custom->groups);
    }
}
