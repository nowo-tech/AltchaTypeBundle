<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\DependencyInjection;

use Nowo\AltchaTypeBundle\DependencyInjection\Configuration;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Config\Definition\Exception\InvalidConfigurationException;
use Symfony\Component\Config\Definition\Processor;

#[CoversClass(Configuration::class)]
final class ConfigurationTest extends TestCase
{
    #[Test]
    public function processesDefaultConfigWithBuiltinProfiles(): void
    {
        $processed = (new Processor())->processConfiguration(new Configuration(), [[]]);

        self::assertTrue($processed['enable']);
        self::assertSame('default', $processed['default_profile']);
        self::assertTrue($processed['replay_protection']['enabled']);
        self::assertSame('cache.app', $processed['replay_protection']['cache_pool']);
        self::assertSame('form_div_layout.html.twig', $processed['form_theme']);
        self::assertFalse($processed['debug']);
        self::assertSame('SHA-256', $processed['hmac_algorithm']);

        foreach (['default', 'low', 'high', 'contact', 'invisible'] as $name) {
            self::assertArrayHasKey($name, $processed['profiles'], 'Missing built-in profile: ' . $name);
        }

        self::assertSame(Configuration::builtinProfiles(), $processed['profiles']);
        self::assertFalse($processed['sentinel']['enabled']);
    }

    #[Test]
    public function mergesPartialProfileOverrides(): void
    {
        $processed = (new Processor())->processConfiguration(new Configuration(), [[
            'default_profile' => 'contact',
            'form_theme'      => 'bootstrap_5_layout.html.twig',
            'debug'           => true,
            'profiles'        => [
                'contact' => [
                    'cost'     => 8000,
                    'floating' => false,
                ],
            ],
        ]]);

        self::assertSame('contact', $processed['default_profile']);
        self::assertTrue($processed['debug']);
        self::assertSame('bootstrap_5_layout.html.twig', $processed['form_theme']);
        self::assertSame(8000, $processed['profiles']['contact']['cost']);
        self::assertFalse($processed['profiles']['contact']['floating']);
        self::assertSame(
            Configuration::builtinProfiles()['contact']['hide_logo'],
            $processed['profiles']['contact']['hide_logo'],
        );
        self::assertArrayHasKey('default', $processed['profiles']);
    }

    #[Test]
    public function rejectsUnknownDefaultProfile(): void
    {
        $this->expectException(InvalidConfigurationException::class);
        $this->expectExceptionMessage('default_profile must exist as a key under profiles.');

        (new Processor())->processConfiguration(new Configuration(), [[
            'default_profile' => 'does-not-exist',
        ]]);
    }

    #[Test]
    public function rejectsCounterMinGreaterThanMax(): void
    {
        $this->expectException(InvalidConfigurationException::class);
        $this->expectExceptionMessage('counter_min must be less than or equal to counter_max.');

        (new Processor())->processConfiguration(new Configuration(), [[
            'profiles' => [
                'default' => [
                    'counter_min' => 100,
                    'counter_max' => 10,
                ],
            ],
        ]]);
    }

    #[Test]
    public function sentinelCanBeEnabledWithOptions(): void
    {
        $processed = (new Processor())->processConfiguration(new Configuration(), [[
            'sentinel' => [
                'enabled'  => true,
                'base_url' => 'https://sentinel.example',
                'api_key'  => 'secret-api-key',
                'timeout'  => 5.0,
                'retries'  => 2,
            ],
        ]]);

        self::assertTrue($processed['sentinel']['enabled']);
        self::assertSame('https://sentinel.example', $processed['sentinel']['base_url']);
        self::assertSame('secret-api-key', $processed['sentinel']['api_key']);
        self::assertSame(5.0, $processed['sentinel']['timeout']);
        self::assertSame(2, $processed['sentinel']['retries']);
        self::assertFalse($processed['sentinel']['fallback_local']);
    }

    /**
     * @return iterable<string, array{array<string, mixed>, string}>
     */
    public static function invalidConfigs(): iterable
    {
        yield 'sentinel without base_url' => [['sentinel' => ['enabled' => true]], 'sentinel.base_url must be an https:// URL'];
        yield 'sentinel over plain http' => [['sentinel' => ['enabled' => true, 'base_url' => 'http://sentinel.test']], 'sentinel.base_url must be an https:// URL'];
        yield 'sentinel timeout too high' => [['sentinel' => ['timeout' => 30.0]], 'timeout'];
        yield 'unknown form theme' => [['form_theme' => 'custom.html.twig'], 'form_theme'];
        yield 'cost above cap' => [['profiles' => ['default' => ['cost' => Configuration::MAX_COST + 1]]], 'cost'];
        yield 'counter above cap' => [['profiles' => ['default' => ['counter_max' => Configuration::MAX_COUNTER + 1]]], 'counter_max'];
        yield 'absolute expiry' => [['profiles' => ['default' => ['expires' => '2030-01-01']]], 'expires must be a relative future offset'];
        yield 'past expiry' => [['profiles' => ['default' => ['expires' => '+0 seconds']]], 'expires must be a relative future offset'];
        yield 'expiry above one day' => [['profiles' => ['default' => ['expires' => '+2 days']]], 'expires must be a relative future offset'];
        yield 'unparseable expiry' => [['profiles' => ['default' => ['expires' => '+not a date']]], 'expires must be a relative future offset'];
    }

    /**
     * @param array<string, mixed> $config
     */
    #[Test]
    #[DataProvider('invalidConfigs')]
    public function rejectsInvalidConfig(array $config, string $message): void
    {
        $this->expectException(InvalidConfigurationException::class);
        $this->expectExceptionMessage($message);

        (new Processor())->processConfiguration(new Configuration(), [$config]);
    }
}
