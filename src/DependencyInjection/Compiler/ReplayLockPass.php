<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\DependencyInjection\Compiler;

use LogicException;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

use function is_array;
use function is_string;
use function sprintf;

/**
 * Checks at build time that the replay check can run under a lock.
 *
 * When replay protection is enabled and the configured lock factory service does not exist, the
 * replay check is best-effort (two concurrent submissions of one payload can both pass). With
 * `replay_protection.require_lock: true` the build fails; otherwise the pass records a warning in
 * the container compiler log (the verifier logs a debug line per check at runtime; it keeps no state).
 */
final class ReplayLockPass implements CompilerPassInterface
{
    /** @var string Container parameter holding the processed `replay_protection` config. */
    private const PARAMETER = 'nowo_altcha_type.replay_protection';

    /**
     * Fails or warns when the replay lock factory is missing.
     *
     * @param ContainerBuilder $container Container builder
     *
     * @throws LogicException When `require_lock` is true and the lock factory service does not exist
     */
    public function process(ContainerBuilder $container): void
    {
        if (!$container->hasParameter(self::PARAMETER)) {
            return;
        }

        $config = $container->getParameter(self::PARAMETER);
        if (!is_array($config) || ($config['enabled'] ?? false) !== true) {
            return;
        }

        $lockFactory = $config['lock_factory'] ?? null;
        if (is_string($lockFactory) && $lockFactory !== '' && $container->has($lockFactory)) {
            return;
        }

        $message = sprintf(
            'nowo_altcha_type.replay_protection: lock factory "%s" is not available, so the replay check is best-effort (install symfony/lock and keep framework.lock enabled, or set replay_protection.lock_factory). See docs/CONCURRENCY.md.',
            is_string($lockFactory) ? $lockFactory : 'null',
        );

        if (($config['require_lock'] ?? false) === true) {
            throw new LogicException($message . ' Set replay_protection.require_lock to false to accept the best-effort mode.');
        }

        $container->log($this, $message);
    }
}
