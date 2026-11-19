<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\DependencyInjection\Compiler;

use LogicException;
use Nowo\AltchaTypeBundle\DependencyInjection\Compiler\ReplayLockPass;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;

#[CoversClass(ReplayLockPass::class)]
final class ReplayLockPassTest extends TestCase
{
    /**
     * @param array<string, mixed> $replayProtection
     */
    private function container(array $replayProtection): ContainerBuilder
    {
        $container = new ContainerBuilder();
        $container->setParameter('nowo_altcha_type.replay_protection', $replayProtection + [
            'enabled'      => true,
            'cache_pool'   => 'cache.app',
            'lock_factory' => 'lock.factory',
            'require_lock' => false,
        ]);

        return $container;
    }

    /**
     * @return list<string>
     */
    private function compilerLog(ContainerBuilder $container): array
    {
        return array_values(array_filter(
            $container->getCompiler()->getLog(),
            static fn (string $line): bool => str_contains($line, 'best-effort'),
        ));
    }

    #[Test]
    public function doesNothingWithoutBundleParameter(): void
    {
        $container = new ContainerBuilder();
        (new ReplayLockPass())->process($container);

        self::assertSame([], $this->compilerLog($container));
    }

    #[Test]
    public function doesNothingWhenReplayProtectionIsDisabled(): void
    {
        $container = $this->container(['enabled' => false, 'require_lock' => true]);
        (new ReplayLockPass())->process($container);

        self::assertSame([], $this->compilerLog($container));
    }

    #[Test]
    public function acceptsAnExistingLockFactory(): void
    {
        $container = $this->container(['require_lock' => true]);
        $container->setDefinition('lock.factory', new Definition('stdClass'));
        (new ReplayLockPass())->process($container);

        self::assertSame([], $this->compilerLog($container));
    }

    #[Test]
    public function logsAWarningWhenTheLockFactoryIsMissing(): void
    {
        $container = $this->container([]);
        (new ReplayLockPass())->process($container);

        $log = $this->compilerLog($container);
        self::assertCount(1, $log);
        self::assertStringContainsString('"lock.factory" is not available', $log[0]);
    }

    #[Test]
    public function logsAWarningWhenNoLockFactoryIsConfigured(): void
    {
        $container = $this->container(['lock_factory' => null]);
        (new ReplayLockPass())->process($container);

        self::assertStringContainsString('"null" is not available', $this->compilerLog($container)[0]);
    }

    #[Test]
    public function failsWhenTheLockIsRequiredAndMissing(): void
    {
        $container = $this->container(['require_lock' => true]);

        $this->expectException(LogicException::class);
        $this->expectExceptionMessage('replay_protection.require_lock');

        (new ReplayLockPass())->process($container);
    }

    #[Test]
    public function ignoresANonArrayParameter(): void
    {
        $container = new ContainerBuilder();
        $container->setParameter('nowo_altcha_type.replay_protection', 'invalid');
        (new ReplayLockPass())->process($container);

        self::assertSame([], $this->compilerLog($container));
    }
}
