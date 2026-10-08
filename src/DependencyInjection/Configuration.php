<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\ArrayNodeDefinition;
use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

use function is_string;

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
     *     hide_footer: bool
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
            ],
        ];
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
