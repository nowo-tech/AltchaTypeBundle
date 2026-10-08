<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Profile;

use InvalidArgumentException;
use Nowo\AltchaTypeBundle\DependencyInjection\Configuration;
use Nowo\AltchaTypeBundle\Profile\AltchaTypeProfileRegistry;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

#[CoversClass(AltchaTypeProfileRegistry::class)]
final class AltchaTypeProfileRegistryTest extends TestCase
{
    #[Test]
    public function getDefaultProfileAndAll(): void
    {
        $profiles = Configuration::builtinProfiles();
        $registry = new AltchaTypeProfileRegistry('default', $profiles);

        self::assertSame('default', $registry->getDefaultProfileName());
        self::assertSame($profiles, $registry->all());
        self::assertTrue($registry->has('contact'));
        self::assertFalse($registry->has('missing'));
        self::assertTrue($registry->get('contact')['floating']);
        self::assertSame($profiles['default'], $registry->get(null));
    }

    #[Test]
    public function getThrowsForUnknownProfile(): void
    {
        $registry = new AltchaTypeProfileRegistry('default', Configuration::builtinProfiles());

        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Unknown altcha-type profile "nope".');

        $registry->get('nope');
    }
}
