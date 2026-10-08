/**
 * Standalone IIFE entry: loads the ALTCHA web component and auto-binds containers.
 */

import 'altcha';
import { destroyAltchaContainer, initAltchaContainer } from './altcha-type-lib';
import { getLogger, setAltchaTypeDebug } from './logger';

declare const __ALTCHA_TYPE_BUILD_TIME__: string;

const SELECTOR = '.nowo-altcha-type';

function bindAll(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
    const debug = el.getAttribute('data-altcha-type-debug-value') === '1';
    setAltchaTypeDebug(debug);
    initAltchaContainer(el);
  });
}

function boot(): void {
  getLogger().debug('boot', { buildTime: typeof __ALTCHA_TYPE_BUILD_TIME__ !== 'undefined' ? __ALTCHA_TYPE_BUILD_TIME__ : 'dev' });
  bindAll();

  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }
          if (node.matches(SELECTOR)) {
            initAltchaContainer(node);
          } else {
            bindAll(node);
          }
        });
        mutation.removedNodes.forEach((node) => {
          if (node instanceof HTMLElement && node.matches(SELECTOR)) {
            destroyAltchaContainer(node);
          }
        });
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
}

const bootFlag = '__nowoAltchaTypeBooted';
const globalScope = window as Window & { [bootFlag]?: boolean };

// The widget template may emit this script once per field; boot only once per page.
if (globalScope[bootFlag] !== true) {
  globalScope[bootFlag] = true;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
}
