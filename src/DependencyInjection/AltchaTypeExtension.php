<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\DependencyInjection;

use Nowo\AltchaTypeBundle\Profile\AltchaTypeProfileRegistry;
use Nowo\AltchaTypeBundle\Service\AltchaClientFactory;
use Nowo\AltchaTypeBundle\Service\AltchaVerifier;
use Symfony\Component\Asset\Package;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
use Symfony\Component\DependencyInjection\Reference;

/**
 * Dependency injection extension for AltchaTypeBundle.
 *
 * Loads configuration, registers the form type, prepends the Twig form theme,
 * and registers the named asset package (REQ-ASSETS-004).
 */
final class AltchaTypeExtension extends Extension implements PrependExtensionInterface
{
    /** @var array<string, string> Map form_theme config value (Configuration::FORM_THEMES) to bundle theme path. */
    private const FORM_THEME_MAP = [
        'form_div_layout.html.twig'               => '@NowoAltchaTypeBundle/Form/altcha_type_theme.html.twig',
        'form_table_layout.html.twig'             => '@NowoAltchaTypeBundle/Form/altcha_type_theme_table.html.twig',
        'bootstrap_5_layout.html.twig'            => '@NowoAltchaTypeBundle/Form/altcha_type_theme_bootstrap5.html.twig',
        'bootstrap_5_horizontal_layout.html.twig' => '@NowoAltchaTypeBundle/Form/altcha_type_theme_bootstrap5_horizontal.html.twig',
        'bootstrap_4_layout.html.twig'            => '@NowoAltchaTypeBundle/Form/altcha_type_theme_bootstrap4.html.twig',
        'bootstrap_4_horizontal_layout.html.twig' => '@NowoAltchaTypeBundle/Form/altcha_type_theme_bootstrap4_horizontal.html.twig',
        'bootstrap_3_layout.html.twig'            => '@NowoAltchaTypeBundle/Form/altcha_type_theme_bootstrap3.html.twig',
        'bootstrap_3_horizontal_layout.html.twig' => '@NowoAltchaTypeBundle/Form/altcha_type_theme_bootstrap3_horizontal.html.twig',
        'foundation_5_layout.html.twig'           => '@NowoAltchaTypeBundle/Form/altcha_type_theme_foundation5.html.twig',
        'foundation_6_layout.html.twig'           => '@NowoAltchaTypeBundle/Form/altcha_type_theme_foundation6.html.twig',
        'tailwind_2_layout.html.twig'             => '@NowoAltchaTypeBundle/Form/altcha_type_theme_tailwind2.html.twig',
    ];

    /**
     * Prepends the bundle form theme to Twig and registers the named asset package (REQ-ASSETS-004).
     */
    public function prepend(ContainerBuilder $container): void
    {
        $configs   = $container->getExtensionConfig(Configuration::ALIAS);
        $config    = $this->processConfiguration(new Configuration(), $configs);
        $formTheme = $config['form_theme'];
        $themePath = self::FORM_THEME_MAP[$formTheme];

        $container->prependExtensionConfig('twig', [
            'form_themes' => [$themePath],
        ]);

        if ($container->hasExtension('framework') && class_exists(Package::class)) {
            $container->prependExtensionConfig('framework', [
                'assets' => [
                    'packages' => [
                        Configuration::ALIAS => [
                            'base_path' => '/bundles/nowoaltchatype',
                        ],
                    ],
                ],
            ]);
        }
    }

    /**
     * Loads the bundle configuration and service definitions.
     *
     * @param array<int, array<string, mixed>> $configs Array of config arrays (one per config file)
     * @param ContainerBuilder $container The container builder
     */
    public function load(array $configs, ContainerBuilder $container): void
    {
        $configuration = new Configuration();
        $config        = $this->processConfiguration($configuration, $configs);

        $container->setParameter('nowo_altcha_type.enable', $config['enable']);
        $container->setParameter('nowo_altcha_type.hmac_signature', $config['hmac_signature']);
        $container->setParameter('nowo_altcha_type.hmac_key_signature', $config['hmac_key_signature']);
        $container->setParameter('nowo_altcha_type.hmac_algorithm', $config['hmac_algorithm']);
        $container->setParameter('nowo_altcha_type.default_profile', $config['default_profile']);
        $container->setParameter('nowo_altcha_type.profiles', $config['profiles']);
        $container->setParameter('nowo_altcha_type.form_theme', $config['form_theme']);
        $container->setParameter('nowo_altcha_type.include_script', $config['include_script']);
        $container->setParameter('nowo_altcha_type.use_stimulus', $config['use_stimulus']);
        $container->setParameter('nowo_altcha_type.debug', $config['debug']);
        $container->setParameter('nowo_altcha_type.sentinel', $config['sentinel']);
        $container->setParameter('nowo_altcha_type.replay_protection', $config['replay_protection']);

        $loader = new YamlFileLoader($container, new FileLocator(__DIR__ . '/../Resources/config'));
        $loader->load('services.yaml');

        $container->getDefinition(AltchaTypeProfileRegistry::class)
            ->setArgument('$defaultProfile', $config['default_profile'])
            ->setArgument('$profiles', $config['profiles']);

        $container->getDefinition(AltchaClientFactory::class)
            ->setArgument('$hmacSignature', $config['hmac_signature'])
            ->setArgument('$hmacKeySignature', $config['hmac_key_signature'])
            ->setArgument('$hmacAlgorithm', $config['hmac_algorithm']);

        $container->getDefinition(AltchaVerifier::class)
            ->setArgument('$enable', $config['enable'])
            ->setArgument('$sentinel', $config['sentinel'])
            ->setArgument('$replayCache', $config['replay_protection']['enabled']
                ? new Reference($config['replay_protection']['cache_pool'])
                : null);
    }

    /**
     * Returns the extension alias (used in config keys).
     */
    public function getAlias(): string
    {
        return Configuration::ALIAS;
    }
}
