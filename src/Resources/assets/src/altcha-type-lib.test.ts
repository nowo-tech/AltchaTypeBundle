import { afterEach, describe, expect, it } from 'vitest';
import { destroyAltchaContainer, initAltchaContainer } from './altcha-type-lib';

describe('altcha-type-lib', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('returns false when markup is incomplete', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    expect(initAltchaContainer(root)).toBe(false);
  });

  it('syncs verified payload into the hidden input', () => {
    const root = document.createElement('div');
    root.innerHTML = `
      <input data-altcha-type-target="input" type="hidden" value="" />
      <div data-altcha-type-target="widget"></div>
    `;
    document.body.appendChild(root);

    expect(initAltchaContainer(root)).toBe(true);

    const widget = root.querySelector('[data-altcha-type-target="widget"]')!;
    const input = root.querySelector<HTMLInputElement>('[data-altcha-type-target="input"]')!;
    widget.dispatchEvent(new CustomEvent('verified', { detail: { payload: 'abc123' } }));
    expect(input.value).toBe('abc123');

    destroyAltchaContainer(root);
    widget.dispatchEvent(new CustomEvent('verified', { detail: { payload: 'ignored' } }));
    expect(input.value).toBe('abc123');
  });

  it('ignores verified events without a usable payload', () => {
    const root = document.createElement('div');
    root.innerHTML = `
      <input data-altcha-type-target="input" type="hidden" value="keep" />
      <div data-altcha-type-target="widget"></div>
    `;
    document.body.appendChild(root);
    initAltchaContainer(root);

    const widget = root.querySelector('[data-altcha-type-target="widget"]')!;
    const input = root.querySelector<HTMLInputElement>('[data-altcha-type-target="input"]')!;
    widget.dispatchEvent(new CustomEvent('verified', { detail: { payload: '' } }));
    widget.dispatchEvent(new CustomEvent('verified'));
    expect(input.value).toBe('keep');
  });

  it.each(['unverified', 'error', 'expired'])('clears the input on %s state', (state) => {
    const root = document.createElement('div');
    root.innerHTML = `
      <input data-altcha-type-target="input" type="hidden" value="" />
      <div data-altcha-type-target="widget"></div>
    `;
    document.body.appendChild(root);
    initAltchaContainer(root);

    const widget = root.querySelector('[data-altcha-type-target="widget"]')!;
    const input = root.querySelector<HTMLInputElement>('[data-altcha-type-target="input"]')!;
    widget.dispatchEvent(new CustomEvent('statechange', { detail: { state: 'verified', payload: 'xyz' } }));
    expect(input.value).toBe('xyz');

    widget.dispatchEvent(new CustomEvent('statechange', { detail: { state } }));
    expect(input.value).toBe('');
  });

  it('keeps the input on unrelated states and when destroy runs without init', () => {
    const root = document.createElement('div');
    root.innerHTML = `
      <input data-altcha-type-target="input" type="hidden" value="v" />
      <div data-altcha-type-target="widget"></div>
    `;
    document.body.appendChild(root);
    expect(() => destroyAltchaContainer(root)).not.toThrow();
    initAltchaContainer(root);

    const widget = root.querySelector('[data-altcha-type-target="widget"]')!;
    const input = root.querySelector<HTMLInputElement>('[data-altcha-type-target="input"]')!;
    widget.dispatchEvent(new CustomEvent('statechange', { detail: { state: 'verifying' } }));
    widget.dispatchEvent(new CustomEvent('statechange'));
    expect(input.value).toBe('v');
  });

  it('registers memory-hard workers when the container declares a workers URL', () => {
    const algorithms = new Map<string, () => Worker>();
    (globalThis as { $altcha?: unknown }).$altcha = { algorithms };
    const root = document.createElement('div');
    root.setAttribute('data-altcha-type-workers-url-value', '/workers/');
    root.innerHTML = `
      <input data-altcha-type-target="input" type="hidden" value="" />
      <div data-altcha-type-target="widget"></div>
    `;
    document.body.appendChild(root);

    expect(initAltchaContainer(root)).toBe(true);
    expect([...algorithms.keys()].sort()).toEqual(['ARGON2ID', 'SCRYPT']);
    delete (globalThis as { $altcha?: unknown }).$altcha;
  });
});
