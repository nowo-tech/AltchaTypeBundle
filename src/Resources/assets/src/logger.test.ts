import { describe, expect, it } from 'vitest';
import { getLogger, setAltchaTypeDebug } from './logger';

describe('logger', () => {
  it('does not throw when debug is disabled', () => {
    setAltchaTypeDebug(false);
    expect(() => getLogger().debug('silent')).not.toThrow();
  });

  it('accepts debug enable', () => {
    setAltchaTypeDebug(true);
    expect(() => getLogger().debug('hello')).not.toThrow();
    setAltchaTypeDebug(false);
  });
});
