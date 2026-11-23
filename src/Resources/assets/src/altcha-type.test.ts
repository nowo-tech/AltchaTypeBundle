/**
 * The shipped IIFE entry logs the house "script loaded" line exactly once per page, even when the widget template
 * emits the script once per field.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('altcha', () => ({}));

describe('altcha-type entry', () => {
  beforeEach(() => {
    delete (window as unknown as Record<string, unknown>).__nowoAltchaTypeBooted;
    vi.resetModules();
  });

  afterEach(() => {
    delete (window as unknown as Record<string, unknown>).__nowoAltchaTypeBooted;
    vi.restoreAllMocks();
  });

  it('logs "script loaded" once with the build id, also when evaluated twice', async () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    await import('./altcha-type');
    vi.resetModules();
    await import('./altcha-type');

    const lines = log.mock.calls.map((call) => String(call[0])).filter((line) => line.includes('script loaded'));
    expect(lines).toHaveLength(1);
    expect(lines[0]).toContain('[altcha-type] script loaded, build: ');
  });
});
