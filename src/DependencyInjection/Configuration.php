<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\ArrayNodeDefinition;
use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;
use Symfony\Component\Config\Definition\Exception\InvalidConfigurationException;

use function array_key_exists;
use function function_exists;
use function is_int;
use function is_string;
use function sprintf;

/**
 * Configuration for AltchaTypeBundle (nowo_altcha_type).
 *
 * Canonical multi-config surface: default_profile + profiles (REQ-CFG-001).
 */
final class Configuration implements ConfigurationInterface
{
    /** @var string Configuration key / extension alias. */
    public const ALIAS = 'nowo_altcha_type';

    /** @var int Upper bound for PBKDF2 iterations per challenge (protects the public challenge endpoint). */
    public const MAX_COST = 100000;

    /** @var int Upper bound for the secret counter range. */
    public const MAX_COUNTER = 1000000;

    /** @var list<string> ALTCHA v3 key-derivation algorithms (PBKDF2/SHA use hmac_algorithm as hash). */
    public const ALGORITHMS = ['PBKDF2', 'SHA', 'ARGON2ID', 'SCRYPT'];

    /** @var int Upper bound for Argon2id iterations (memory-hard: each attempt is expensive). */
    public const MAX_ARGON2_COST = 10;

    /** @var int Argon2id memory bounds in KiB (server derives once per challenge and per verification). */
    public const ARGON2_MEMORY_MIN = 1024;
    public const ARGON2_MEMORY_MAX = 65536;

    /** @var int Scrypt N bounds (power of two). */
    public const SCRYPT_COST_MIN = 1024;
    public const SCRYPT_COST_MAX = 65536;

    /** @var int Scrypt block size (r) and parallelism (p) upper bounds. */
    public const SCRYPT_MEMORY_MAX      = 16;
    public const SCRYPT_PARALLELISM_MAX = 4;

    /** @var int Upper bound for challenge lifetime (also bounds the replay-cache TTL). */
    public const MAX_EXPIRES_SECONDS = 86400;

    /** @var list<string> Supported Symfony base form layouts. */
    public const FORM_THEMES = [
        'form_div_layout.html.twig',
        'form_table_layout.html.twig',
        'bootstrap_5_layout.html.twig',
        'bootstrap_5_horizontal_layout.html.twig',
        'bootstrap_4_layout.html.twig',
        'bootstrap_4_horizontal_layout.html.twig',
        'bootstrap_3_layout.html.twig',
        'bootstrap_3_horizontal_layout.html.twig',
        'foundation_5_layout.html.twig',
        'foundation_6_layout.html.twig',
        'tailwind_2_layout.html.twig',
    ];

    /**
     * Built-in named profiles covering common form anti-spam difficulty levels.
     *
     * @return array<string, array{
     *     cost: int,
     *     counter_min: int,
     *     counter_max: int,
     *     timeout: float,
     *     expires: string,
     *     floating: bool,
     *     hide_logo: bool,
     *     hide_footer: bool,
     *     algorithm: string,
     *     memory_cost: int|null,
     *     parallelism: int|null
     * }>
     */
    public static function builtinProfiles(): array
    {
        return [
            'default' => [
                'cost'        => 5000,
                'counter_min' => 5000,
                'counter_max' => 10000,
                'timeout'     => 30.0,
                'expires'     => '+10 minutes',
                'floating'    => false,
                'hide_logo'   => false,
                'hide_footer' => false,
                'algorithm'   => 'PBKDF2',
                'memory_cost' => null,
                'parallelism' => null,
            ],
            'low' => [
                'cost'        => 2000,
                'counter_min' => 1000,
                'counter_max' => 5000,
                'timeout'     => 20.0,
                'expires'     => '+10 minutes',
                'floating'    => false,
                'hide_logo'   => false,
                'hide_footer' => false,
                'algorithm'   => 'PBKDF2',
                'memory_cost' => null,
                'parallelism' => null,
            ],
            'high' => [
                'cost'        => 15000,
                'counter_min' => 10000,
                'counter_max' => 50000,
                'timeout'     => 60.0,
                'expires'     => '+5 minutes',
                'floating'    => false,
                'hide_logo'   => false,
                'hide_footer' => false,
                'algorithm'   => 'PBKDF2',
                'memory_cost' => null,
                'parallelism' => null,
            ],
            'contact' => [
                'cost'        => 5000,
                'counter_min' => 5000,
                'counter_max' => 15000,
                'timeout'     => 30.0,
                'expires'     => '+15 minutes',
                'floating'    => true,
                'hide_logo'   => false,
                'hide_footer' => false,
                'algorithm'   => 'PBKDF2',
                'memory_cost' => null,
                'parallelism' => null,
            ],
            'invisible' => [
                'cost'        => 5000,
                'counter_min' => 5000,
                'counter_max' => 10000,
                'timeout'     => 30.0,
                'expires'     => '+10 minutes',
                'floating'    => true,
                'hide_logo'   => true,
                'hide_footer' => true,
                'algorithm'   => 'PBKDF2',
                'memory_cost' => null,
                'parallelism' => null,
            ],
        ];
    }

    /**
     * Fills algorithm-specific defaults (memory_cost / parallelism) for a raw profile array.
     *
     * @param array<string, mixed> $profile Raw profile config
     *
     * @return array<string, mixed> Profile with defaults
     */
    public static function applyAlgorithmDefaults(array $profile): array
    {
        $algorithm = $profile['algorithm'] ?? 'PBKDF2';
        if ($algorithm === 'ARGON2ID') {
            $profile['memory_cost'] ??= 19456;
        }
        if ($algorithm === 'SCRYPT') {
            $profile['memory_cost'] ??= 8;
            $profile['parallelism'] ??= 1;
        }

        // Explicit nulls (e.g. merged from built-ins) fall back to the node default.
        foreach (['memory_cost', 'parallelism'] as $key) {
            if (array_key_exists($key, $profile) && $profile[$key] === null) {
                unset($profile[$key]);
            }
        }

        return $profile;
    }

    /**
     * Validates algorithm-specific bounds and PHP extension availability for a normalized profile.
     *
     * @param array<string, mixed> $profile Normalized profile (cost, algorithm, memory_cost, parallelism)
     *
     * @return string|null Error message, or null when valid
     */
    public static function algorithmError(array $profile): ?string
    {
        $typed = [
            'cost'        => is_int($profile['cost'] ?? null) ? $profile['cost'] : 0,
            'algorithm'   => is_string($profile['algorithm'] ?? null) ? $profile['algorithm'] : 'PBKDF2',
            'memory_cost' => is_int($profile['memory_cost'] ?? null) ? $profile['memory_cost'] : null,
            'parallelism' => is_int($profile['parallelism'] ?? null) ? $profile['parallelism'] : null,
        ];

        return self::algorithmExtensionError($typed['algorithm']) ?? self::algorithmBoundsError($typed);
    }

    /**
     * Returns an error when the PHP extension needed by a memory-hard algorithm is missing.
     *
     * @param string $algorithm Algorithm name
     *
     * @return string|null Error message, or null when available
     */
    public static function algorithmExtensionError(string $algorithm): ?string
    {
        return match (true) {
            $algorithm === 'ARGON2ID' && !function_exists('sodium_crypto_pwhash') => 'algorithm ARGON2ID requires ext-sodium.',
            $algorithm === 'SCRYPT' && !function_exists('scrypt')                 => 'algorithm SCRYPT requires ext-scrypt.',
            default                                                               => null,
        };
    }

    /**
     * Validates cost / memory_cost / parallelism for the profile algorithm.
     *
     * @param array{cost: int, algorithm: string, memory_cost: int|null, parallelism: int|null} $profile Normalized profile
     *
     * @return string|null Error message, or null when valid
     */
    public static function algorithmBoundsError(array $profile): ?string
    {
        $cost   = $profile['cost'];
        $memory = $profile['memory_cost'];
        $par    = $profile['parallelism'];

        return match ($profile['algorithm']) {
            'ARGON2ID' => match (true) {
                $cost > self::MAX_ARGON2_COST                                                              => sprintf('ARGON2ID cost must be between 1 and %d.', self::MAX_ARGON2_COST),
                $memory === null || $memory < self::ARGON2_MEMORY_MIN || $memory > self::ARGON2_MEMORY_MAX => sprintf('ARGON2ID memory_cost must be between %d and %d KiB.', self::ARGON2_MEMORY_MIN, self::ARGON2_MEMORY_MAX),
                $par !== null                                                                              => 'ARGON2ID does not support parallelism (libsodium uses 1).',
                default                                                                                    => null,
            },
            'SCRYPT' => match (true) {
                $cost < self::SCRYPT_COST_MIN || $cost > self::SCRYPT_COST_MAX || ($cost & ($cost - 1)) !== 0 => sprintf('SCRYPT cost (N) must be a power of two between %d and %d.', self::SCRYPT_COST_MIN, self::SCRYPT_COST_MAX),
                $memory === null || $memory < 1 || $memory > self::SCRYPT_MEMORY_MAX                          => sprintf('SCRYPT memory_cost (r) must be between 1 and %d.', self::SCRYPT_MEMORY_MAX),
                $par === null || $par < 1 || $par > self::SCRYPT_PARALLELISM_MAX                              => sprintf('SCRYPT parallelism (p) must be between 1 and %d.', self::SCRYPT_PARALLELISM_MAX),
                default                                                                                       => null,
            },
            default => $memory !== null || $par !== null
                ? sprintf('%s does not use memory_cost / parallelism.', $profile['algorithm'])
                : null,
        };
    }

    /**
     * Builds the strict `nowo_altcha_type` configuration tree (REQ-SF-006).
     *
     * @return TreeBuilder<'array'> The root tree builder
     */
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder(self::ALIAS);
        $root        = $treeBuilder->getRootNode();

        $root
            ->children()
                ->booleanNode('enable')
                    ->info('When false, challenges are still issued but form validation always passes (use in test/dev only).')
                    ->defaultTrue()
                ->end()
                ->scalarNode('hmac_signature')
                    ->info('HMAC secret used to sign challenges. Prefer env(ALTCHA_HMAC_SIGNATURE); default uses APP_SECRET.')
                    ->defaultValue('%env(APP_SECRET)%')
                    ->cannotBeEmpty()
                ->end()
                ->scalarNode('hmac_key_signature')
                    ->info('Optional key-signature secret enabling Altcha fast verification path.')
                    ->defaultNull()
                ->end()
                ->enumNode('hmac_algorithm')
                    ->values(['SHA-256', 'SHA-384', 'SHA-512'])
                    ->defaultValue('SHA-256')
                ->end()
                ->scalarNode('default_profile')
                    ->info('Name of the profile used when the form option profile is omitted.')
                    ->defaultValue('default')
                    ->cannotBeEmpty()
                ->end()
                ->enumNode('form_theme')
                    ->info('Base Symfony form layout; selects the matching bundle widget theme.')
                    ->values(self::FORM_THEMES)
                    ->defaultValue('form_div_layout.html.twig')
                ->end()
                ->arrayNode('replay_protection')
                    ->info('Single-use payloads: a solved challenge is remembered until it expires and rejected on reuse.')
                    ->canBeDisabled()
                    ->children()
                        ->scalarNode('cache_pool')
                            ->info('PSR-6 cache pool service id (shared across workers/hosts in production, e.g. Redis).')
                            ->defaultValue('cache.app')
                            ->cannotBeEmpty()
                        ->end()
                    ->end()
                ->end()
                ->booleanNode('include_script')
                    ->info('When true, the Twig theme can emit the altcha widget script tag.')
                    ->defaultTrue()
                ->end()
                ->booleanNode('use_stimulus')
                    ->info('When true, prefer Stimulus controller attributes instead of auto-including the script.')
                    ->defaultFalse()
                ->end()
                ->booleanNode('debug')
                    ->info('When true, the frontend may log debug messages to the console.')
                    ->defaultFalse()
                ->end()
                ->arrayNode('sentinel')
                    ->info('Optional ALTCHA Sentinel remote verification. When configured, verification prefers Sentinel with local fallback.')
                    ->canBeEnabled()
                    ->children()
                        ->scalarNode('base_url')
                            ->info('Sentinel base URL (https:// only), e.g. https://sentinel.example.com.')
                            ->defaultNull()
                        ->end()
                        ->scalarNode('api_key')
                            ->defaultNull()
                        ->end()
                        ->floatNode('timeout')
                            ->info('Per-attempt Sentinel HTTP timeout in seconds (REQ-RUNTIME-001).')
                            ->min(0.5)
                            ->max(10.0)
                            ->defaultValue(5.0)
                        ->end()
                        ->integerNode('retries')
                            ->min(0)
                            ->max(2)
                            ->defaultValue(1)
                        ->end()
                        ->booleanNode('fallback_local')
                            ->info('When true, a Sentinel transport error (not a rejection) falls back to local verification.')
                            ->defaultFalse()
                        ->end()
                    ->end()
                    ->validate()
                        ->ifTrue(static fn (array $v): bool => $v['enabled'] === true && (!is_string($v['base_url']) || !str_starts_with($v['base_url'], 'https://')))
                        ->thenInvalid('sentinel.base_url must be an https:// URL when sentinel is enabled.')
                    ->end()
                ->end()
            ->end();

        $this->addProfilesNode($root);

        $root
            ->validate()
                ->ifTrue(static fn (array $v): bool => !isset($v['profiles'][$v['default_profile']]))
                ->thenInvalid('default_profile must exist as a key under profiles.')
            ->end();

        return $treeBuilder;
    }

    private function addProfilesNode(ArrayNodeDefinition $root): void
    {
        $root
            ->children()
                ->arrayNode('profiles')
                    ->info('Named complete settings blocks for Altcha difficulty / UX (REQ-CFG-001).')
                    ->useAttributeAsKey('name')
                    ->normalizeKeys(false)
                    ->defaultValue(self::builtinProfiles())
                    ->beforeNormalization()
                        ->ifArray()
                        ->then(static function (array $profiles): array {
                            return array_replace_recursive(self::builtinProfiles(), $profiles);
                        })
                    ->end()
                    ->arrayPrototype()
                        ->children()
                            ->integerNode('cost')
                                ->min(1)
                                ->max(self::MAX_COST)
                                ->defaultValue(5000)
                            ->end()
                            ->integerNode('counter_min')
                                ->min(0)
                                ->max(self::MAX_COUNTER)
                                ->defaultValue(5000)
                            ->end()
                            ->integerNode('counter_max')
                                ->min(1)
                                ->max(self::MAX_COUNTER)
                                ->defaultValue(10000)
                            ->end()
                            ->floatNode('timeout')
                                ->min(1.0)
                                ->defaultValue(30.0)
                            ->end()
                            ->scalarNode('expires')
                                ->defaultValue('+10 minutes')
                                ->cannotBeEmpty()
                            ->end()
                            ->booleanNode('floating')
                                ->defaultFalse()
                            ->end()
                            ->booleanNode('hide_logo')
                                ->defaultFalse()
                            ->end()
                            ->booleanNode('hide_footer')
                                ->defaultFalse()
                            ->end()
                            ->enumNode('algorithm')
                                ->info('ALTCHA v3 key derivation: PBKDF2 (default), SHA, ARGON2ID (ext-sodium), SCRYPT (ext-scrypt).')
                                ->values(self::ALGORITHMS)
                                ->defaultValue('PBKDF2')
                            ->end()
                            ->integerNode('memory_cost')
                                ->info('ARGON2ID: memory in KiB (1024-65536, default 19456). SCRYPT: block size r (1-16, default 8).')
                                ->defaultNull()
                            ->end()
                            ->integerNode('parallelism')
                                ->info('SCRYPT only: parallelism p (1-4, default 1).')
                                ->defaultNull()
                            ->end()
                        ->end()
                        ->beforeNormalization()
                            ->ifArray()
                            ->then(static fn (array $p): array => self::applyAlgorithmDefaults($p))
                        ->end()
                        ->validate()
                            ->ifTrue(static fn (array $p): bool => self::algorithmError($p) !== null)
                            ->then(static function (array $p): array {
                                throw new InvalidConfigurationException((string) self::algorithmError($p));
                            })
                        ->end()
                        ->validate()
                            ->ifTrue(static fn (array $p): bool => $p['counter_min'] > $p['counter_max'])
                            ->thenInvalid('counter_min must be less than or equal to counter_max.')
                        ->end()
                        ->validate()
                            ->ifTrue(static function (array $p): bool {
                                if (!is_string($p['expires']) || !str_starts_with($p['expires'], '+')) {
                                    return true;
                                }
                                $now = time();
                                $at  = strtotime($p['expires'], $now);

                                return $at === false || $at <= $now || $at > $now + self::MAX_EXPIRES_SECONDS;
                            })
                            ->thenInvalid('expires must be a relative future offset parseable by strtotime (e.g. "+10 minutes"), at most 1 day.')
                        ->end()
                    ->end()
                ->end()
            ->end();
    }
}
