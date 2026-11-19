<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit;

use Nowo\AltchaTypeBundle\DependencyInjection\AltchaTypeExtension;
use Nowo\AltchaTypeBundle\DependencyInjection\Compiler\ReplayLockPass;
use Nowo\AltchaTypeBundle\DependencyInjection\Compiler\TwigPathsPass;
use Nowo\AltchaTypeBundle\NowoAltchaTypeBundle;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Symfony\Component\DependencyInjection\ContainerBuilder;

#[CoversClass(NowoAltchaTypeBundle::class)]
final class NowoAltchaTypeBundleTest extends TestCase
{
    #[Test]
    public function getContainerExtensionReturnsAltchaTypeExtension(): void
    {
        $bundle = new NowoAltchaTypeBundle();

        self::assertInstanceOf(AltchaTypeExtension::class, $bundle->getContainerExtension());
    }

    #[Test]
    public function buildRegistersTwigPathsPass(): void
    {
        $bundle    = new NowoAltchaTypeBundle();
        $container = new ContainerBuilder();
        $bundle->build($container);

        $passes = $container->getCompilerPassConfig()->getBeforeOptimizationPasses();
        $found  = false;
        foreach ($passes as $pass) {
            if ($pass instanceof TwigPathsPass) {
                $found = true;
                break;
            }
        }

        self::assertTrue($found);
    }

    #[Test]
    public function buildRegistersReplayLockPass(): void
    {
        $container = new ContainerBuilder();
        (new NowoAltchaTypeBundle())->build($container);

        $passes = array_filter(
            $container->getCompilerPassConfig()->getBeforeOptimizationPasses(),
            static fn (object $pass): bool => $pass instanceof ReplayLockPass,
        );

        self::assertCount(1, $passes);
    }
}
