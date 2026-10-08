/**
 * Tiny debug logger gated by `data-altcha-type-debug-value`.
 */

export type AltchaTypeLogger = {
  debug: (...args: unknown[]) => void;
};

let debugEnabled = false;

/**
 * Enables or disables debug logging for the Altcha Type frontend.
 *
 * @param enabled - Whether `console.debug` output is emitted
 * @returns void
 */
export function setAltchaTypeDebug(enabled: boolean): void {
  debugEnabled = enabled;
}

/**
 * Returns a logger that writes to `console.debug` when debug is enabled.
 *
 * @returns Logger bound to the current debug flag
 */
export function getLogger(): AltchaTypeLogger {
  return {
    debug(...args: unknown[]): void {
      if (debugEnabled && typeof console !== 'undefined' && typeof console.debug === 'function') {
        console.debug('[nowo-altcha-type]', ...args);
      }
    },
  };
}
