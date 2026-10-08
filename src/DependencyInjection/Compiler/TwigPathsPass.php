<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

use function dirname;

/**
 * Registers the bundle's Twig views path at the end of the native loader so that
 * application overrides (templates/bundles/NowoAltchaTypeBundle/) are consulted first.
 */
final class TwigPathsPass implements CompilerPassInterface
{
    private const TWIG_NAMESPACE = 'NowoAltchaTypeBundle';

    /**
     * Appends the bundle views path under the `NowoAltchaTypeBundle` namespace.
     *
     * @param ContainerBuilder $container Container builder
     */
    public function process(ContainerBuilder $container): void
    {
        $loaderId = $this->getNativeLoaderServiceId($container);
        if ($loaderId === null) {
            return;
        }

        $viewsPath = dirname(__DIR__, 2) . '/Resources/views';

        $container->getDefinition($loaderId)
            ->addMethodCall('addPath', [$viewsPath, self::TWIG_NAMESPACE]);
    }

    /**
     * Finds the Twig native filesystem loader service id.
     *
     * @param ContainerBuilder $container Container builder
     *
     * @return string|null Service id or null when Twig is not registered
     */
    private function getNativeLoaderServiceId(ContainerBuilder $container): ?string
    {
        if ($container->hasAlias('twig.loader.native')) {
            $alias = $container->getAlias('twig.loader.native');

            return (string) $alias;
        }
        if ($container->hasDefinition('twig.loader.native')) {
            return 'twig.loader.native';
        }
        if ($container->hasDefinition('twig.loader.native_filesystem')) {
            return 'twig.loader.native_filesystem';
        }

        return null;
    }
}
