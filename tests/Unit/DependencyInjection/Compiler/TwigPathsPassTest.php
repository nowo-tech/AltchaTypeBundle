<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\DependencyInjection\Compiler;

use Nowo\AltchaTypeBundle\DependencyInjection\Compiler\TwigPathsPass;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;

#[CoversClass(TwigPathsPass::class)]
final class TwigPathsPassTest extends TestCase
{
    #[Test]
    public function addsTwigPathWithBundleNamespace(): void
    {
        $container  = new ContainerBuilder();
        $definition = new Definition();
        $container->setDefinition('twig.loader.native_filesystem', $definition);

        (new TwigPathsPass())->process($container);

        $calls = $definition->getMethodCalls();
        self::assertNotEmpty($calls);
        self::assertSame('addPath', $calls[0][0]);
        self::assertSame('NowoAltchaTypeBundle', $calls[0][1][1]);
    }

    #[Test]
    public function doesNothingWithoutLoader(): void
    {
        $container = new ContainerBuilder();
        (new TwigPathsPass())->process($container);
        self::assertFalse($container->hasDefinition('twig.loader.native_filesystem'));
    }

    #[Test]
    public function resolvesNativeLoaderAlias(): void
    {
        $container  = new ContainerBuilder();
        $definition = new Definition();
        $container->setDefinition('twig.loader.custom', $definition);
        $container->setAlias('twig.loader.native', 'twig.loader.custom');

        (new TwigPathsPass())->process($container);

        self::assertSame('addPath', $definition->getMethodCalls()[0][0]);
    }

    #[Test]
    public function usesNativeLoaderDefinition(): void
    {
        $container  = new ContainerBuilder();
        $definition = new Definition();
        $container->setDefinition('twig.loader.native', $definition);

        (new TwigPathsPass())->process($container);

        self::assertSame('NowoAltchaTypeBundle', $definition->getMethodCalls()[0][1][1]);
    }
}
