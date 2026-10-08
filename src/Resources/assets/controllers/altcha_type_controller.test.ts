import { Application } from '@hotwired/stimulus';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import AltchaTypeController from './altcha_type_controller';

vi.mock('altcha', () => ({}));

/** Waits one microtask turn so Stimulus can connect/disconnect controllers. */
const flush = (): Promise<void> => new Promise((resolve) => setTimeout(resolve, 0));

describe('AltchaTypeController', () => {
  let application: Application;

  beforeEach(() => {
    application = Application.start();
    application.register('altcha-type', AltchaTypeController);
  });

  afterEach(() => {
    application.stop();
    document.body.innerHTML = '';
  });

  it('binds the widget on connect and unbinds on disconnect', async () => {
    document.body.innerHTML = `
      <div data-controller="altcha-type" data-altcha-type-debug-value="true" data-altcha-type-challenge-url-value="/c">
        <input data-altcha-type-target="input" type="hidden" value="" />
        <div data-altcha-type-target="widget"></div>
      </div>
    `;
    await flush();

    const root = document.querySelector<HTMLElement>('[data-controller="altcha-type"]')!;
    const widget = root.querySelector('[data-altcha-type-target="widget"]')!;
    const input = root.querySelector<HTMLInputElement>('[data-altcha-type-target="input"]')!;

    widget.dispatchEvent(new CustomEvent('verified', { detail: { payload: 'p1' } }));
    expect(input.value).toBe('p1');

    root.remove();
    await flush();

    widget.dispatchEvent(new CustomEvent('verified', { detail: { payload: 'p2' } }));
    expect(input.value).toBe('p1');
  });

  it('skips binding when the markup is incomplete', async () => {
    document.body.innerHTML = '<div data-controller="altcha-type"></div>';
    await flush();

    const root = document.querySelector<HTMLElement>('[data-controller="altcha-type"]')!;
    expect((root as HTMLElement & { __nowoAltchaCleanup?: () => void }).__nowoAltchaCleanup).toBeUndefined();
  });
});
