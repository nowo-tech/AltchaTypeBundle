<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Service\Sentinel;

use AltchaOrg\Altcha\Http\HttpClientInterface;
use AltchaOrg\Altcha\Http\HttpResponse;
use Nowo\AltchaTypeBundle\Service\Sentinel\TransportTrackingHttpClient;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use RuntimeException;

#[CoversClass(TransportTrackingHttpClient::class)]
final class TransportTrackingHttpClientTest extends TestCase
{
    /**
     * @return iterable<string, array{int, string, bool}>
     */
    public static function responses(): iterable
    {
        yield 'json 200' => [200, '{"verified":true}', false];
        yield 'rejection 400' => [400, '{"error":"x"}', false];
        yield 'server error' => [502, '', true];
        yield 'non-json 200' => [200, '<html>', true];
    }

    #[Test]
    #[DataProvider('responses')]
    public function tracksTransportFailures(int $status, string $body, bool $failed): void
    {
        $inner = $this->createMock(HttpClientInterface::class);
        $inner->method('send')->willReturn(new HttpResponse($status, $body));

        $client   = new TransportTrackingHttpClient($inner);
        $response = $client->send('https://s.test', 'POST', [], '{}', 1.0);

        self::assertSame($status, $response->statusCode);
        self::assertSame($failed, $client->hasTransportFailed());
    }

    #[Test]
    public function exceptionsAreRecordedAndRethrown(): void
    {
        $inner = $this->createMock(HttpClientInterface::class);
        $inner->method('send')->willThrowException(new RuntimeException('down'));
        $client = new TransportTrackingHttpClient($inner);

        try {
            $client->send('https://s.test', 'POST', [], '{}', 1.0);
            self::fail('Expected exception');
        } catch (RuntimeException) {
            self::assertTrue($client->hasTransportFailed());
        }

        $client->reset();
        self::assertFalse($client->hasTransportFailed());
    }

    #[Test]
    public function defaultsToStreamClient(): void
    {
        self::assertFalse((new TransportTrackingHttpClient())->hasTransportFailed());
    }
}
