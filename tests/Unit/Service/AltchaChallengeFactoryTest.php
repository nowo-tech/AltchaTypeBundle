<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Service;

use DateTimeImmutable;
use Nowo\AltchaTypeBundle\DependencyInjection\Configuration;
use Nowo\AltchaTypeBundle\Profile\AltchaTypeProfileRegistry;
use Nowo\AltchaTypeBundle\Service\AltchaChallengeFactory;
use Nowo\AltchaTypeBundle\Service\AltchaClientFactory;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Clock\MockClock;

#[CoversClass(AltchaChallengeFactory::class)]
final class AltchaChallengeFactoryTest extends TestCase
{
    #[Test]
    public function createsChallengeForDefaultAndNamedProfiles(): void
    {
        $factory = new AltchaChallengeFactory(
            new AltchaClientFactory('test-secret', null, 'SHA-256'),
            new AltchaTypeProfileRegistry('default', Configuration::builtinProfiles()),
        );

        $default = $factory->create(null);
        $low     = $factory->create('low');

        self::assertNotSame('', $default->signature);
        self::assertSame(['profile' => 'default'], $default->parameters->data);
        self::assertSame(['profile' => 'low'], $low->parameters->data);
        self::assertSame(Configuration::builtinProfiles()['low']['cost'], $low->parameters->cost);
    }

    #[Test]
    public function usesClockForExpiryAndFixedCounterWhenMinEqualsMax(): void
    {
        $profiles = ['default' => ['counter_min' => 10, 'counter_max' => 10] + Configuration::builtinProfiles()['default']];
        $clock    = new MockClock(new DateTimeImmutable('2030-01-01 00:00:00 UTC'));

        $factory = new AltchaChallengeFactory(
            new AltchaClientFactory('test-secret', null, 'SHA-256'),
            new AltchaTypeProfileRegistry('default', $profiles),
            $clock,
        );

        self::assertSame(
            (new DateTimeImmutable('2030-01-01 00:10:00 UTC'))->getTimestamp(),
            $factory->create()->parameters->expiresAt,
        );
    }
}
