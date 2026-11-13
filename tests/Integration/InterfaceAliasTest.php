<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Integration;

use Nowo\AltchaTypeBundle\DependencyInjection\AltchaTypeExtension;
use Nowo\AltchaTypeBundle\Service\AltchaChallengeFactory;
use Nowo\AltchaTypeBundle\Service\AltchaChallengeFactoryInterface;
use Nowo\AltchaTypeBundle\Service\AltchaVerifier;
use Nowo\AltchaTypeBundle\Service\AltchaVerifierInterface;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;

/**
 * REQ-ARCH-001 rule 1: the verifier and the challenge factory are reachable (and replaceable) through interfaces.
 */
#[CoversClass(AltchaTypeExtension::class)]
final class InterfaceAliasTest extends TestCase
{
    #[Test]
    public function interfacesAreAliasedToTheShippedClasses(): void
    {
        $container = $this->container();

        self::assertSame(AltchaVerifier::class, (string) $container->getAlias(AltchaVerifierInterface::class));
        self::assertSame(AltchaChallengeFactory::class, (string) $container->getAlias(AltchaChallengeFactoryInterface::class));
        self::assertTrue($container->hasDefinition(AltchaVerifier::class), 'The class service id stays valid.');
    }

    #[Test]
    public function aHostCanOverrideTheAliases(): void
    {
        $container = $this->container();
        $container->setDefinition('app.verifier', new Definition(AltchaVerifierInterface::class));
        $container->setAlias(AltchaVerifierInterface::class, 'app.verifier');

        self::assertSame('app.verifier', (string) $container->getAlias(AltchaVerifierInterface::class));
    }

    private function container(): ContainerBuilder
    {
        $container = new ContainerBuilder();
        $container->setParameter('kernel.debug', false);
        $container->setParameter('kernel.environment', 'test');
        (new AltchaTypeExtension())->load([['hmac_signature' => 'x']], $container);

        return $container;
    }
}
