<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Fixtures\Worker;

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
 * Host kernel with the bundle, one route and one controller that owns the host form.
 */
final class WorkerHostKernel extends Kernel
{
    use MicroKernelTrait;
    public const HMAC = 'worker-kept-alive-test-hmac-secret';

    public function __construct()
    {
        parent::__construct('test', false);
    }

    public function registerBundles(): iterable
    {
        return [new FrameworkBundle(), new TwigBundle(), new NowoAltchaTypeBundle()];
    }

    public function getProjectDir(): string
    {
        return dirname(__DIR__, 3);
    }

    public function getCacheDir(): string
    {
        return sys_get_temp_dir() . '/nowo-altcha-worker-kept-alive/cache';
    }

    public function getLogDir(): string
    {
        return sys_get_temp_dir() . '/nowo-altcha-worker-kept-alive/log';
    }

    protected function configureContainer(ContainerConfigurator $container): void
    {
        $container->extension('framework', [
            'test'                  => true,
            'secret'                => 'test-only-secret',
            'http_method_override'  => false,
            'handle_all_throwables' => true,
            'php_errors'            => ['log' => true],
            'csrf_protection'       => false,
        ]);
        $profile = ['cost' => 10, 'counter_min' => 3, 'counter_max' => 3, 'timeout' => 30.0, 'expires' => '+1 hour', 'algorithm' => 'PBKDF2'];
        $container->extension('nowo_altcha_type', [
            'hmac_signature' => self::HMAC,
            'profiles'       => [
                'alpha' => $profile + ['floating' => true, 'hide_logo' => true, 'hide_footer' => false],
                'beta'  => ['cost' => 11, 'counter_min' => 4, 'counter_max' => 4] + $profile + ['floating' => false, 'hide_logo' => false, 'hide_footer' => true],
            ],
        ]);
        $container->extension('twig', ['default_path' => __DIR__]);
        $container->services()
            ->set(WorkerHostController::class)
            ->autowire()
            ->public()
            ->tag('controller.service_arguments');
    }

    protected function configureRoutes(RoutingConfigurator $routes): void
    {
        $routes->import('@NowoAltchaTypeBundle/Controller/', 'attribute');
        $routes->add('worker_host', '/host/{who}')->controller(WorkerHostController::class);
    }
}
