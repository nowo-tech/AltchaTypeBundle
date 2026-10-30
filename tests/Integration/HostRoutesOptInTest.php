<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Integration;

use Nowo\AltchaTypeBundle\Controller\AltchaChallengeController;
use Nowo\AltchaTypeBundle\Tests\Integration\Kernel\HostRoutesKernel;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Loader\AttributeServicesLoader;
use Symfony\Component\Routing\RouterInterface;

use function class_exists;

/**
 * REQ-SF-004 rule 7: the challenge route is opt-in. The controller service is not autoconfigured, so a host whose
 * routing is only `routing.controllers` does not expose `/_nowo/altcha/challenge`; with the documented import the
 * route exists and serves a challenge.
 */
final class HostRoutesOptInTest extends TestCase
{
    private ?HostRoutesKernel $kernel = null;

    protected function setUp(): void
    {
        if (!class_exists(AttributeServicesLoader::class)) {
            self::markTestSkipped('The routing.controllers resource needs symfony/routing >= 7.3.');
        }
    }

    protected function tearDown(): void
    {
        $this->kernel?->shutdown();
        $this->kernel = null;
    }

    public function testRoutingControllersAloneDoesNotExposeTheChallengeRoute(): void
    {
        self::assertNull($this->router(false)->getRouteCollection()->get(AltchaChallengeController::ROUTE_NAME));
        foreach ($this->router(false)->getRouteCollection()->all() as $route) {
            self::assertNotSame('/_nowo/altcha/challenge', $route->getPath());
        }
    }

    public function testTheImportedRouteServesAChallenge(): void
    {
        self::assertSame('/_nowo/altcha/challenge', $this->router(true)->getRouteCollection()->get(AltchaChallengeController::ROUTE_NAME)?->getPath());

        $response = $this->kernel?->handle(Request::create('/_nowo/altcha/challenge'));
        self::assertSame(200, $response?->getStatusCode(), (string) $response?->getContent());
        self::assertStringContainsString('"signature"', (string) $response->getContent());
    }

    private function router(bool $importBundleRoutes): RouterInterface
    {
        if (!$this->kernel instanceof HostRoutesKernel) {
            $this->kernel = new HostRoutesKernel($importBundleRoutes);
            $this->kernel->boot();
        }
        $router = $this->kernel->getContainer()->get('router');
        self::assertInstanceOf(RouterInterface::class, $router);

        return $router;
    }
}
