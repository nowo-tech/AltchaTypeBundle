<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Service;

use Symfony\Component\Lock\Key;
use Symfony\Component\Lock\PersistingStoreInterface;

/**
 * Lock store recording save/delete calls (single process, no real locking needed in unit tests).
 */
final class RecordingLockStore implements PersistingStoreInterface
{
    /** @var list<string> */
    public array $events = [];

    /** @var list<string> */
    public array $keys = [];

    /** @var array<string, true> */
    private array $held = [];

    public function save(Key $key): void
    {
        $this->events[]            = 'save';
        $this->keys[]              = (string) $key;
        $this->held[(string) $key] = true;
    }

    public function delete(Key $key): void
    {
        $this->events[] = 'delete';
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
