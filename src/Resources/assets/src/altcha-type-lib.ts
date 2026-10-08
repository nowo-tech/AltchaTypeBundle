/**
 * Binds an ALTCHA widget instance to a Symfony hidden input.
 */

import { registerAlgorithmWorkers } from './altcha-workers';
import { getLogger } from './logger';

export type AltchaTypeContainer = HTMLElement & {
  __nowoAltchaCleanup?: () => void;
};

type VerifiedDetail = {
  payload?: string;
};

/**
 * Wires widget `verified` / `statechange` events onto the hidden Symfony input.
 *
 * @param root - Container holding the `input` and `widget` targets
 * @returns true when binding succeeded
 */
export function initAltchaContainer(root: HTMLElement): boolean {
  const input = root.querySelector<HTMLInputElement>('[data-altcha-type-target="input"]');
  const widget = root.querySelector<HTMLElement>('[data-altcha-type-target="widget"]');
  if (!input || !widget) {
    getLogger().debug('init skipped: missing input or widget');
    return false;
  }

  // ALTCHA v3 memory-hard profiles (ARGON2ID / SCRYPT) need their workers registered before solving.
  const workersUrl = root.getAttribute('data-altcha-type-workers-url-value');
  if (workersUrl) {
    getLogger().debug('algorithm workers registered', registerAlgorithmWorkers(workersUrl));
  }

  const onVerified = (event: Event): void => {
    const detail = (event as CustomEvent<VerifiedDetail>).detail;
    const payload = detail?.payload;
    if (typeof payload === 'string' && payload !== '') {
      input.value = payload;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      getLogger().debug('payload synced to form input');
    }
  };

  const onStateChange = (event: Event): void => {
    const detail = (event as CustomEvent<{ state?: string; payload?: string }>).detail;
    if (detail?.state === 'verified' && typeof detail.payload === 'string') {
      input.value = detail.payload;
    }
    if (detail?.state === 'unverified' || detail?.state === 'error' || detail?.state === 'expired') {
      input.value = '';
    }
  };

  widget.addEventListener('verified', onVerified);
  widget.addEventListener('statechange', onStateChange);

  (root as AltchaTypeContainer).__nowoAltchaCleanup = (): void => {
    widget.removeEventListener('verified', onVerified);
    widget.removeEventListener('statechange', onStateChange);
  };

  getLogger().debug('container initialized');
  return true;
}

/**
 * Removes event listeners previously attached by {@link initAltchaContainer}.
 *
 * @param root - Container previously passed to {@link initAltchaContainer}
 * @returns void
 */
export function destroyAltchaContainer(root: HTMLElement): void {
  const cleanup = (root as AltchaTypeContainer).__nowoAltchaCleanup;
  if (typeof cleanup === 'function') {
    cleanup();
    delete (root as AltchaTypeContainer).__nowoAltchaCleanup;
  }
}
