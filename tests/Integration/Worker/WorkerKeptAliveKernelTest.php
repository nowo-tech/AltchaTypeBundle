<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Integration\Worker;

use AltchaOrg\Altcha\Challenge;
use AltchaOrg\Altcha\Payload;
use AltchaOrg\Altcha\SolveChallengeOptions;
use Nowo\AltchaTypeBundle\Service\AltchaClientFactory;
use Nowo\AltchaTypeBundle\Tests\Fixtures\Worker\WorkerHostKernel;
use PHPUnit\Framework\Attributes\CoversNothing;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Component\HttpKernel\TerminableInterface;

use function gc_collect_cycles;
use function is_array;
use function json_decode;
use function memory_get_usage;
use function sprintf;

use const JSON_THROW_ON_ERROR;

/**
 * REQ-RUNTIME-002: ONE kept-alive kernel (FrankenPHP worker mode, kernel reset false). The `services_resetter` and
 * `kernel.reset` are never called. Through `http_kernel` (handle + terminate), N times and alternating two profiles
 * (two clients) and two locales, the bundle controller issues a signed challenge, the test solves it, a host form
 * with an `AltchaType` field is rendered (GET) and submitted (POST), the same payload is submitted again (replay)
 * and a payload signed for the other profile is submitted. Every response must contain only its own data, the
 * verdicts must never carry over from one request to the next, and memory must stay flat.
 */
#[CoversNothing]
final class WorkerKeptAliveKernelTest extends TestCase
{
    private const ITERATIONS = 1000;

    private const WARM_UP = 100;

    private const MEMORY_MARGIN_BYTES = 4 * 1024 * 1024;

    public function testFormRenderAndSubmitInOneKernelWithoutResetCarriesNoStateAndKeepsMemoryFlat(): void
    {
        $kernel = new WorkerHostKernel();
        $kernel->boot();
        $http = $kernel->getContainer()->get('http_kernel');
        self::assertInstanceOf(HttpKernelInterface::class, $http);
        self::assertInstanceOf(TerminableInterface::class, $http);

        $clientFactory = new AltchaClientFactory(WorkerHostKernel::HMAC, null, 'SHA-256');
        $solve         = static function (array $challengeData) use ($clientFactory): string {
            $challenge = Challenge::fromArray($challengeData);
            $solution  = $clientFactory->createClient()->solveChallenge(new SolveChallengeOptions(
                algorithm: $clientFactory->createAlgorithm('PBKDF2'),
                challenge: $challenge,
                timeout: 60.0,
            ));
            self::assertNotNull($solution);

            return (new Payload($challenge, $solution))->toBase64();
        };
        $call = static function (Request $request) use ($http): array {
            $response = $http->handle($request);
            $body     = (string) $response->getContent();
            $http->terminate($request, $response);

            return [$response, $body];
        };
        $challengeFor = static function (string $profile) use ($call, $solve): string {
            [$response, $body] = $call(Request::create('/_nowo/altcha/challenge', Request::METHOD_GET, ['profile' => $profile]));
            self::assertSame(Response::HTTP_OK, $response->getStatusCode());
            $data = json_decode($body, true, 512, JSON_THROW_ON_ERROR);
            self::assertTrue(is_array($data));
            self::assertSame($profile, $data['parameters']['data']['profile'] ?? null);

            return $solve($data);
        };

        $inputs = [
            'alpha' => ['locale' => 'en', 'display' => 'display="floating"', 'cost' => 10],
            'beta'  => ['locale' => 'es', 'display' => 'display="standard"', 'cost' => 11],
        ];

        $baseline = 0;
        for ($i = 0; $i < self::ITERATIONS; ++$i) {
            if ($i === self::WARM_UP) {
                gc_collect_cycles();
                $baseline = memory_get_usage();
            }

            $who   = $i % 2 === 0 ? 'alpha' : 'beta';
            $other = $who === 'alpha' ? 'beta' : 'alpha';
            $in    = $inputs[$who];
            $ctx   = sprintf('iteration %d, %s', $i, $who);

            $own      = $challengeFor($who);
            $foreign  = $challengeFor($other);
            $post     = static fn (string $payload): Request => Request::create('/host/' . $who, Request::METHOD_POST, ['f' => ['captcha' => $payload]]);
            $localize = static function (Request $request) use ($in): Request {
                $request->setLocale($in['locale']);

                return $request;
            };

            // Render: only the own profile is in the page.
            [$response, $body] = $call($localize(Request::create('/host/' . $who)));
            self::assertSame(Response::HTTP_OK, $response->getStatusCode(), $ctx);
            self::assertStringContainsString('who=' . $who . ';submitted=[none];', $body, $ctx);
            self::assertStringContainsString('profile&#x3D;' . $who, $body, $ctx);
            self::assertStringNotContainsString('profile&#x3D;' . $other, $body, $ctx);
            self::assertStringContainsString($in['display'], $body, $ctx);
            self::assertStringNotContainsString($inputs[$other]['display'], $body, $ctx);

            // Submit the solved challenge: valid once, then rejected as a replay (state is in the PSR-6 pool).
            [, $body] = $call($localize($post($own)));
            self::assertStringContainsString('submitted=[valid];', $body, $ctx);
            [, $body] = $call($localize($post($own)));
            self::assertStringContainsString('submitted=[invalid];', $body, $ctx);

            // A payload signed for the other profile never verifies here, and never spoils the own profile.
            [, $body] = $call($localize($post($foreign)));
            self::assertStringContainsString('submitted=[invalid];', $body, $ctx);
        }

        gc_collect_cycles();
        $growth = memory_get_usage() - $baseline;
        self::assertLessThan(self::MEMORY_MARGIN_BYTES, $growth, sprintf('memory grew by %d bytes over %d iterations', $growth, self::ITERATIONS - self::WARM_UP));

        $kernel->shutdown();
    }
}
