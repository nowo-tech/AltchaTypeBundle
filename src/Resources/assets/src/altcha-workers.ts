/**
 * Registers the ALTCHA v3 memory-hard algorithm workers (Argon2id / Scrypt).
 *
 * The main `altcha` bundle ships PBKDF2 and SHA workers only; Argon2id and Scrypt workers are
 * published by the bundle under `<asset package>/workers/` and loaded on demand.
 */

/** Worker file name per ALTCHA v3 algorithm id. */
export const MEMORY_HARD_WORKERS: Readonly<Record<string, string>> = {
  ARGON2ID: 'argon2id.js',
  SCRYPT: 'scrypt.js',
};

type AltchaAlgorithms = Map<string, () => Worker | Promise<Worker>>;

/**
 * Returns the widget's algorithm registry (`globalThis.$altcha.algorithms`) once `altcha` is loaded.
 *
 * @returns The registry, or null when the widget script is not loaded yet
 */
export function getAltchaAlgorithms(): AltchaAlgorithms | null {
  const altcha = (globalThis as { $altcha?: { algorithms?: AltchaAlgorithms } }).$altcha;
  return altcha?.algorithms instanceof Map ? altcha.algorithms : null;
}

/**
 * Registers Argon2id / Scrypt worker factories that load from `baseUrl` (keeps existing entries).
 *
 * @param baseUrl - URL of the folder holding `argon2id.js` and `scrypt.js` (trailing slash optional)
 * @param algorithms - Registry to fill (defaults to the global `$altcha.algorithms`)
 * @returns Number of algorithms registered by this call
 */
export function registerAlgorithmWorkers(baseUrl: string, algorithms: AltchaAlgorithms | null = getAltchaAlgorithms()): number {
  if (!algorithms || baseUrl === '') {
    return 0;
  }
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  let registered = 0;
  for (const [algorithm, file] of Object.entries(MEMORY_HARD_WORKERS)) {
    if (!algorithms.has(algorithm)) {
      algorithms.set(algorithm, () => new Worker(`${base}${file}`));
      registered++;
    }
  }
  return registered;
}
