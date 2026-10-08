import { afterEach, describe, expect, it, vi } from 'vitest';
import { getAltchaAlgorithms, MEMORY_HARD_WORKERS, registerAlgorithmWorkers } from './altcha-workers';

type Factory = () => Worker | Promise<Worker>;

describe('altcha-workers', () => {
  afterEach(() => {
    delete (globalThis as { $altcha?: unknown }).$altcha;
    vi.unstubAllGlobals();
  });

  it('returns null without the widget global', () => {
    expect(getAltchaAlgorithms()).toBeNull();
    expect(registerAlgorithmWorkers('/w/')).toBe(0);
  });

  it('registers Argon2id and Scrypt from the base URL without overriding existing entries', () => {
    const algorithms = new Map<string, Factory>();
    const custom: Factory = () => ({}) as Worker;
    algorithms.set('SCRYPT', custom);
    (globalThis as { $altcha?: unknown }).$altcha = { algorithms };

    const created: string[] = [];
    vi.stubGlobal(
      'Worker',
      class {
        constructor(url: string) {
          created.push(url);
        }
      },
    );

    expect(getAltchaAlgorithms()).toBe(algorithms);
    expect(registerAlgorithmWorkers('/bundles/nowoaltchatype/workers')).toBe(1);
    expect(algorithms.get('SCRYPT')).toBe(custom);

    (algorithms.get('ARGON2ID') as Factory)();
    expect(created).toEqual([`/bundles/nowoaltchatype/workers/${MEMORY_HARD_WORKERS.ARGON2ID}`]);
  });

  it('ignores an empty base URL', () => {
    expect(registerAlgorithmWorkers('', new Map())).toBe(0);
  });
});
