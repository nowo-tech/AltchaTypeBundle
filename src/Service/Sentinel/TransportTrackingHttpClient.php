<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Service\Sentinel;

use AltchaOrg\Altcha\Http\HttpClientInterface;
use AltchaOrg\Altcha\Http\HttpResponse;
use AltchaOrg\Altcha\Http\StreamHttpClient;
use Symfony\Contracts\Service\ResetInterface;
use Throwable;

use function is_array;

/**
 * Per-call HTTP client decorator that records whether the last Sentinel exchange failed at
 * transport level (exception, non-2xx/non-400 status, or unparseable body) as opposed to a
 * genuine rejection. Created per verification, so it carries no state across requests.
 */
final class TransportTrackingHttpClient implements HttpClientInterface, ResetInterface
{
    private bool $transportFailed = false;

    private readonly HttpClientInterface $inner;

    /**
     * @param HttpClientInterface|null $inner Wrapped client (defaults to the altcha-org stream client)
     */
    public function __construct(?HttpClientInterface $inner = null)
    {
        $this->inner = $inner ?? new StreamHttpClient();
    }

    /**
     * Sends the request through the wrapped client and records transport failures.
     *
     * @param string $url Target URL
     * @param string $method HTTP method
     * @param array<string, string> $headers Request headers
     * @param string $body Request body
     * @param float $timeout Timeout in seconds
     *
     * @throws Throwable Re-thrown transport errors (altcha-org handles retries)
     *
     * @return HttpResponse Wrapped response
     */
    public function send(string $url, string $method, array $headers, string $body, float $timeout): HttpResponse
    {
        try {
            $response = $this->inner->send($url, $method, $headers, $body, $timeout);
        } catch (Throwable $e) {
            $this->transportFailed = true;

            throw $e;
        }

        $ok = $response->statusCode === 400
            || ($response->statusCode >= 200 && $response->statusCode < 300 && is_array(json_decode($response->body, true)));
        $this->transportFailed = !$ok;

        return $response;
    }

    /**
     * Whether the last exchange failed at transport level.
     *
     * @return bool True when Sentinel could not give a verdict
     */
    public function hasTransportFailed(): bool
    {
        return $this->transportFailed;
    }

    /**
     * Clears the recorded transport state.
     */
    public function reset(): void
    {
        $this->transportFailed = false;
    }
}
