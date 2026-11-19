<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Service;

use RuntimeException;
use Symfony\Component\Lock\Key;
use Symfony\Component\Lock\PersistingStoreInterface;

/**
 * Lock store whose save (acquire) or delete (release) fails, as an unreachable Redis/PDO store would.
 */
final class FailingLockStore implements PersistingStoreInterface
{
    /** @var array<string, true> */
    private array $held = [];

    public function __construct(private readonly bool $failSave, private readonly bool $failDelete)
    {
    }

    public function save(Key $key): void
    {
        if ($this->failSave) {
            throw new RuntimeException('lock store down');
        }
        $key->reduceLifetime(10.0);
        $this->held[(string) $key] = true;
    }

    public function delete(Key $key): void
    {
        if ($this->failDelete) {
            throw new RuntimeException('lock store down');
        }
        unset($this->held[(string) $key]);
    }

    public function exists(Key $key): bool
    {
        return isset($this->held[(string) $key]);
    }

    public function putOffExpiration(Key $key, float $ttl): void
    {
    }
}
