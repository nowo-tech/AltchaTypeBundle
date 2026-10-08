<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\DependencyInjection;

use Nowo\AltchaTypeBundle\Controller\AltchaChallengeController;
use Nowo\AltchaTypeBundle\DependencyInjection\AltchaTypeExtension;
use Nowo\AltchaTypeBundle\DependencyInjection\Configuration;
use Nowo\AltchaTypeBundle\Form\Type\AltchaType;
use Nowo\AltchaTypeBundle\Profile\AltchaTypeProfileRegistry;
use Nowo\AltchaTypeBundle\Service\AltchaClientFactory;
use Nowo\AltchaTypeBundle\Service\AltchaVerifier;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Symfony\Bundle\FrameworkBundle\DependencyInjection\FrameworkExtension;
use Symfony\Component\Config\Definition\Exception\InvalidConfigurationException;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;

use function dirname;
use function strlen;

#[CoversClass(AltchaTypeExtension::class)]
final class AltchaTypeExtensionTest extends TestCase
{
    #[Test]
    public function getAliasReturnsNowoAltchaType(): void
    {
        $extension = new AltchaTypeExtension();
        self::assertSame('nowo_altcha_type', $extension->getAlias());
    }

    #[Test]
    public function loadSetsParametersAndRegistersServices(): void
    {
        $container = new ContainerBuilder();
        $extension = new AltchaTypeExtension();

        $extension->load([[
            'hmac_signature' => 'test-hmac-key',
        ]], $container);

        self::assertTrue($container->getParameter('nowo_altcha_type.enable'));
        self::assertSame('test-hmac-key', $container->getParameter('nowo_altcha_type.hmac_signature'));
        self::assertSame('default', $container->getParameter('nowo_altcha_type.default_profile'));
        self::assertSame('form_div_layout.html.twig', $container->getParameter('nowo_altcha_type.form_theme'));
        self::assertFalse($container->getParameter('nowo_altcha_type.debug'));
        self::assertIsArray($container->getParameter('nowo_altcha_type.profiles'));
        $sentinel = $container->getParameter('nowo_altcha_type.sentinel');
        self::assertIsArray($sentinel);
        self::assertFalse($sentinel['enabled']);
        self::assertNull($sentinel['base_url']);
        self::assertNull($sentinel['api_key']);

        self::assertTrue($container->hasDefinition(AltchaTypeProfileRegistry::class));
        self::assertTrue($container->hasDefinition(AltchaClientFactory::class));
        self::assertTrue($container->hasDefinition(AltchaVerifier::class));
        self::assertTrue($container->hasDefinition(AltchaType::class));
        self::assertTrue($container->hasDefinition(AltchaChallengeController::class));

        $replayCache = $container->getDefinition(AltchaVerifier::class)->getArgument('$replayCache');
        self::assertInstanceOf(Reference::class, $replayCache);
        self::assertSame('cache.app', (string) $replayCache);
    }

    #[Test]
    public function loadWithoutReplayProtectionPassesNullCache(): void
    {
        $container = new ContainerBuilder();
        (new AltchaTypeExtension())->load([[
            'replay_protection' => ['enabled' => false],
        ]], $container);

        self::assertNull($container->getDefinition(AltchaVerifier::class)->getArgument('$replayCache'));
    }

    #[Test]
    public function loadSetsFormThemeFromConfig(): void
    {
        $container = new ContainerBuilder();
        $extension = new AltchaTypeExtension();

        $extension->load([[
            'hmac_signature' => 'key',
            'form_theme'     => 'bootstrap_5_layout.html.twig',
        ]], $container);

        self::assertSame('bootstrap_5_layout.html.twig', $container->getParameter('nowo_altcha_type.form_theme'));
    }

    #[Test]
    public function prependAddsFormThemeToTwig(): void
    {
        $container = new ContainerBuilder();
        $container->prependExtensionConfig(Configuration::ALIAS, []);
        $extension = new AltchaTypeExtension();

        $extension->prepend($container);

        $twigConfigs = $container->getExtensionConfig('twig');
        self::assertNotEmpty($twigConfigs);
        self::assertSame(
            ['@NowoAltchaTypeBundle/Form/altcha_type_theme.html.twig'],
            $twigConfigs[0]['form_themes'],
        );
    }

    #[Test]
    public function prependAddsBootstrap5ThemeWhenConfigured(): void
    {
        $container = new ContainerBuilder();
        $container->prependExtensionConfig(Configuration::ALIAS, ['form_theme' => 'bootstrap_5_layout.html.twig']);
        $extension = new AltchaTypeExtension();

        $extension->prepend($container);

        $twigConfigs = $container->getExtensionConfig('twig');
        self::assertSame(
            ['@NowoAltchaTypeBundle/Form/altcha_type_theme_bootstrap5.html.twig'],
            $twigConfigs[0]['form_themes'],
        );
    }

    #[Test]
    public function prependRejectsUnknownFormTheme(): void
    {
        $container = new ContainerBuilder();
        $container->prependExtensionConfig(Configuration::ALIAS, ['form_theme' => 'unknown_layout.html.twig']);

        $this->expectException(InvalidConfigurationException::class);
        (new AltchaTypeExtension())->prepend($container);
    }

    #[Test]
    public function everySupportedFormThemeHasABundleTheme(): void
    {
        foreach (Configuration::FORM_THEMES as $formTheme) {
            $container = new ContainerBuilder();
            $container->prependExtensionConfig(Configuration::ALIAS, ['form_theme' => $formTheme]);
            (new AltchaTypeExtension())->prepend($container);

            $themePath = $container->getExtensionConfig('twig')[0]['form_themes'][0];
            self::assertFileExists(dirname(__DIR__, 3) . '/src/Resources/views/' . substr($themePath, strlen('@NowoAltchaTypeBundle/')));
        }
    }

    #[Test]
    public function prependRegistersNamedAssetPackageWhenFrameworkPresent(): void
    {
        $container = new ContainerBuilder();
        $container->registerExtension(new FrameworkExtension());
        $container->prependExtensionConfig(Configuration::ALIAS, []);
        $extension = new AltchaTypeExtension();

        $extension->prepend($container);

        $frameworkConfigs = $container->getExtensionConfig('framework');
        self::assertNotEmpty($frameworkConfigs);
        self::assertSame(
            '/bundles/nowoaltchatype',
            $frameworkConfigs[0]['assets']['packages']['nowo_altcha_type']['base_path'] ?? null,
        );
    }
}
