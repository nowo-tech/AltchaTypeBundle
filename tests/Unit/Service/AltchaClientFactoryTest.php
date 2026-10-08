<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Service;

use AltchaOrg\Altcha\Algorithm\Pbkdf2;
use AltchaOrg\Altcha\Altcha;
use InvalidArgumentException;
use Nowo\AltchaTypeBundle\Service\AltchaClientFactory;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

#[CoversClass(AltchaClientFactory::class)]
final class AltchaClientFactoryTest extends TestCase
{
    #[Test]
    public function createsClientAndAlgorithm(): void
    {
        $factory = new AltchaClientFactory('secret', 'key', 'SHA-256');

        self::assertSame('secret', $factory->getHmacSignature());
        self::assertInstanceOf(Altcha::class, $factory->createClient());
        self::assertInstanceOf(Pbkdf2::class, $factory->createAlgorithm());
    }

    #[Test]
    public function rejectsUnknownAlgorithm(): void
    {
        $factory = new AltchaClientFactory('secret', null, 'MD5');

        $this->expectException(InvalidArgumentException::class);
        $factory->createClient();
    }

    /**
     * @return iterable<string, array{string}>
     */
    public static function supportedAlgorithms(): iterable
    {
        yield 'sha256' => ['SHA-256'];
        yield 'sha384' => ['SHA-384'];
        yield 'sha512' => ['SHA-512'];
    }

    #[Test]
    #[DataProvider('supportedAlgorithms')]
    public function supportsEveryConfiguredAlgorithm(string $algorithm): void
    {
        $factory = new AltchaClientFactory('secret', null, $algorithm);

        self::assertInstanceOf(Pbkdf2::class, $factory->createAlgorithm());
    }
}
