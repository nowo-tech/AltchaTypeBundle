import { test, expect } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * REQ-DEMO-013 — full demo frame: the demo platform shell (nav of the cases) + form with the ALTCHA widget, without the
 * Symfony WebProfiler toolbar.
 */
const outDir = process.env.SCREENSHOT_DIR
  ? resolve(process.env.SCREENSHOT_DIR)
  : resolve(__dirname, '../../../../docs/images/demo');

async function hideProfiler(page: import('@playwright/test').Page): Promise<void> {
  await page.addStyleTag({ content: '.sf-toolbar,.sf-minitoolbar,[id^="sfwdt"]{display:none!important}' });
}

/** Grows the viewport so the whole case card fits above the fold, without the Symfony toolbar. */
async function fitViewportToDemo(page: import('@playwright/test').Page) {
  const card = await page.locator('[data-testid="demo-case"]').boundingBox();
  const height = Math.min(1600, Math.max(900, Math.ceil((card?.y ?? 0) + (card?.height ?? 700) + 96)));
  await page.setViewportSize({ width: 1280, height });
}

async function prepareDemoPage(page: import('@playwright/test').Page, path: string) {
  await page.setViewportSize({ width: 1280, height: 1100 });
  await page.goto(path);
  await expect(page.getByTestId('demo-platform')).toBeVisible();
  await expect(page.getByTestId('demo-case')).toBeVisible();
  await expect(page.locator('.nowo-altcha-type altcha-widget').first()).toBeAttached();
  await hideProfiler(page);
  await fitViewportToDemo(page);
}

async function captureDemo(page: import('@playwright/test').Page, file: string) {
  await fitViewportToDemo(page);
  await page.screenshot({ path: resolve(outDir, file) });
}

/** Clicks the ALTCHA checkbox and waits until the payload reaches the hidden input. */
async function solveAltcha(page: import('@playwright/test').Page) {
  const host = page.locator('.nowo-altcha-type').first();
  await host.locator('altcha-widget label').first().click();
  await expect(host.locator('[data-altcha-type-target="input"]')).not.toHaveValue('', { timeout: 30000 });
}

test.beforeAll(() => {
  mkdirSync(outDir, { recursive: true });
});

test.describe('AltchaType screenshots (full demo context)', () => {
  test('overview — shell + low case, widget unverified', async ({ page }) => {
    await prepareDemoPage(page, '/en/low');
    await expect(page.locator('[data-nowo-ui-aside] [aria-current="page"]')).toContainText(/Low/i);
    await expect(page.locator('.nowo-altcha-type [data-altcha-type-target="input"]').first()).toHaveValue('');
    await captureDemo(page, 'overview.png');
  });

  test('interaction — shell + low case, widget verified', async ({ page }) => {
    await prepareDemoPage(page, '/en/low');
    await solveAltcha(page);
    await captureDemo(page, 'interaction.png');
  });
});
