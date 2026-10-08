<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle;

use Nowo\AltchaTypeBundle\DependencyInjection\AltchaTypeExtension;
use Nowo\AltchaTypeBundle\DependencyInjection\Compiler\TwigPathsPass;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\ExtensionInterface;
use Symfony\Component\HttpKernel\Bundle\Bundle;

/**
 * Symfony bundle that provides AltchaType — a privacy-friendly proof-of-work
 * CAPTCHA alternative for Symfony forms (ALTCHA).
 */
final class NowoAltchaTypeBundle extends Bundle
{
    /**
     * Creates the bundle and its extension instance once.
     */
    public function __construct()
    {
        // Boot-once extension cache (not request state). Assigned in __construct so
        // FrankenPHP worker / FRANKENPHP_RESET_KERNEL unset|false stays ResetInterface-clean.
        $this->extension = new AltchaTypeExtension();
    }

    /**
     * Registers the Twig paths compiler pass.
     *
     * @param ContainerBuilder $container Container builder
     */
    public function build(ContainerBuilder $container): void
    {
        $container->addCompilerPass(new TwigPathsPass());
    }

    /**
     * Returns the container extension that loads the bundle configuration and services.
     */
    public function getContainerExtension(): ExtensionInterface
    {
        /** @var ExtensionInterface $extension */
        $extension = $this->extension;

        return $extension;
    }
}
