<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Controller;

use Nowo\AltchaTypeBundle\Controller\AltchaChallengeController;
use Nowo\AltchaTypeBundle\DependencyInjection\Configuration;
use Nowo\AltchaTypeBundle\Profile\AltchaTypeProfileRegistry;
use Nowo\AltchaTypeBundle\Service\AltchaChallengeFactory;
use Nowo\AltchaTypeBundle\Service\AltchaClientFactory;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpFoundation\Request;

#[CoversClass(AltchaChallengeController::class)]
final class AltchaChallengeControllerTest extends TestCase
{
    private function controller(): AltchaChallengeController
    {
        $registry = new AltchaTypeProfileRegistry('default', Configuration::builtinProfiles());

        return new AltchaChallengeController(
            new AltchaChallengeFactory(new AltchaClientFactory('test-secret', null, 'SHA-256'), $registry),
            $registry,
        );
    }

    #[Test]
    public function returnsNonCacheableJsonChallengeForProfile(): void
    {
        $response = ($this->controller())(new Request(['profile' => 'low']));

        self::assertSame(200, $response->getStatusCode());
        self::assertStringContainsString('no-store', (string) $response->headers->get('Cache-Control'));
        $data = json_decode((string) $response->getContent(), true);
        self::assertIsArray($data);
        self::assertArrayHasKey('signature', $data);
        self::assertSame('low', $data['parameters']['data']['profile']);
    }

    #[Test]
    public function usesDefaultProfileWithoutQuery(): void
    {
        $data = json_decode((string) ($this->controller())(new Request())->getContent(), true);

        self::assertIsArray($data);
        self::assertSame('default', $data['parameters']['data']['profile']);
    }

    #[Test]
    public function unknownProfileReturnsBadRequest(): void
    {
        $response = ($this->controller())(new Request(['profile' => 'nope']));

        self::assertSame(400, $response->getStatusCode());
        self::assertSame('{"error":"unknown_profile"}', $response->getContent());
    }
}
