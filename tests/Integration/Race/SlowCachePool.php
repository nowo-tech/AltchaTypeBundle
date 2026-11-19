<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Integration\Race;

use Psr\Cache\CacheItemInterface;
use Psr\Cache\CacheItemPoolInterface;

/**
 * PSR-6 decorator that pauses after each read, so the window between the replay check's read and
 * write is wide enough for a deterministic race between processes.
 */
final class SlowCachePool implements CacheItemPoolInterface
{
    public function __construct(private readonly CacheItemPoolInterface $inner, private readonly int $delayMs)
    {
    }

    public function getItem(string $key): CacheItemInterface
    {
        $item = $this->inner->getItem($key);
        usleep($this->delayMs * 1000);

        return $item;
    }

    /**
     * @param array<string> $keys
     *
     * @return iterable<string, CacheItemInterface>
     */
    public function getItems(array $keys = []): iterable
    {
        return $this->inner->getItems($keys);
    }

    public function hasItem(string $key): bool
    {
        return $this->inner->hasItem($key);
    }

    public function clear(): bool
    {
        return $this->inner->clear();
    }

    public function deleteItem(string $key): bool
    {
        return $this->inner->deleteItem($key);
    }

    /**
     * @param array<string> $keys
     */
    public function deleteItems(array $keys): bool
    {
        return $this->inner->deleteItems($keys);
    }

    public function save(CacheItemInterface $item): bool
    {
        return $this->inner->save($item);
    }

    public function saveDeferred(CacheItemInterface $item): bool
    {
        return $this->inner->saveDeferred($item);
    }

    public function commit(): bool
    {
        return $this->inner->commit();
    }
}
