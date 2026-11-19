<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Service;

use Psr\Log\AbstractLogger;
use Stringable;

use function is_string;

/**
 * PSR-3 logger recording "level: message" lines.
 */
final class RecordingLogger extends AbstractLogger
{
    /** @var list<string> */
    public array $records = [];

    /**
     * @param mixed $level
     * @param array<array-key, mixed> $context
     */
    public function log($level, string|Stringable $message, array $context = []): void
    {
        $this->records[] = (is_string($level) ? $level : 'unknown') . ': ' . $message;
    }

    /**
     * @return list<string>
     */
    public function matching(string $needle): array
    {
        return array_values(array_filter($this->records, static fn (string $r): bool => str_contains($r, $needle)));
    }
}
