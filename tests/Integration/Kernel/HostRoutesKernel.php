<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Integration\Kernel;

use Nowo\AltchaTypeBundle\NowoAltchaTypeBundle;
use Symfony\Bundle\FrameworkBundle\FrameworkBundle;
use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Bundle\TwigBundle\TwigBundle;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Routing\Loader\Configurator\RoutingConfigurator;

use function dirname;
use function sys_get_temp_dir;

/**
 * REQ-SF-004 rule 7: real kernel whose routing is the Symfony 7.3+ default `controllers: { resource:
 * routing.controllers }`, with or without the documented import of the bundle controllers.
 */
final class HostRoutesKernel extends Kernel
{
    use MicroKernelTrait;

    public function __construct(private readonly bool $importBundleRoutes)
    {
        parent::__construct('test', true);
    }

    public function registerBundles(): iterable
    {
        return [
            new FrameworkBundle(),
            new TwigBundle(),
            new NowoAltchaTypeBundle(),
        ];
    }

    public function getProjectDir(): string
    {
        return dirname(__DIR__, 3);
    }

    public function getCacheDir(): string
    {
        return sys_get_temp_dir() . '/nowo-altcha-type-host-routes/' . ($this->importBundleRoutes ? 'imported' : 'controllers-only') . '/cache';
    }

    public function getLogDir(): string
    {
        return sys_get_temp_dir() . '/nowo-altcha-type-host-routes/log';
    }

    protected function configureContainer(ContainerConfigurator $container): void
    {
        $container->extension('framework', ['test' => true, 'secret' => 'test-only-secret', 'http_method_override' => false]);
        $container->extension('nowo_altcha_type', ['hmac_signature' => 'test-only-hmac']);
    }

    protected function configureRoutes(RoutingConfigurator $routes): void
    {
        if ($this->importBundleRoutes) {
            $routes->import('@NowoAltchaTypeBundle/Controller/', 'attribute');
        }
        $routes->import('routing.controllers');
    }
}
