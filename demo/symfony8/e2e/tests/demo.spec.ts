import { test, expect } from '@playwright/test';

/**
 * REQ-DEMO-013 — ALTCHA widget renders, solves the proof-of-work, and syncs the payload
 * into the hidden Symfony input.
 */
test.describe('AltchaType demo', () => {
  test('contact case renders the ALTCHA widget', async ({ page }) => {
    const response = await page.goto('/en/contact');
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator('.nowo-altcha-type altcha-widget').first()).toBeAttached();
  });

  test('the old ?case= URL redirects permanently to the case path', async ({ request }) => {
    const response = await request.get('/en?case=low', { maxRedirects: 0 });
    expect(response.status()).toBe(301);
    expect(response.headers()['location']).toMatch(/\/en\/low$/);
  });

  test('challenge endpoint returns a signed challenge', async ({ request }) => {
    const response = await request.get('/_nowo/altcha/challenge?profile=low');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(typeof body.signature).toBe('string');
    expect(body.signature).not.toBe('');
  });

  test('solving the challenge fills the hidden input', async ({ page }) => {
    await page.goto('/en/low');
    const host = page.locator('.nowo-altcha-type').first();
    await host.locator('altcha-widget label').first().click();
    await expect(host.locator('[data-altcha-type-target="input"]')).not.toHaveValue('', { timeout: 30000 });
  });

  test('submitting a solved form passes server-side verification', async ({ page }) => {
    await page.goto('/en/low');
    await page.getByLabel('Name', { exact: true }).fill('Ada');
    await page.getByLabel('Email', { exact: true }).fill('ada@example.test');
    await page.getByLabel('Message', { exact: true }).fill('Hello from Playwright');
    const host = page.locator('.nowo-altcha-type').first();
    await host.locator('altcha-widget label').first().click();
    await expect(host.locator('[data-altcha-type-target="input"]')).not.toHaveValue('', { timeout: 30000 });
    await page.getByRole('button', { name: 'Send' }).click();
    await expect(page.locator('.nowo-ui-flash--success')).toBeVisible();
  });

  test('submitting without solving shows the validation error', async ({ page }) => {
    await page.goto('/en/low');
    await page.getByLabel('Name', { exact: true }).fill('Ada');
    await page.getByLabel('Email', { exact: true }).fill('ada@example.test');
    await page.getByLabel('Message', { exact: true }).fill('No proof-of-work');
    await page.locator('form').evaluate((form: HTMLFormElement) => {
      form.noValidate = true;
      form.submit();
    });
    await expect(page.locator('.nowo-ui-flash--success')).toHaveCount(0);
    await expect(page.locator('.invalid-feedback, .form-error-message, .nowo-ui-field__error, .nowo-ui-form-error, .nowo-ui-form-errors__list').first()).toBeVisible();
  });

  test('ALTCHA v3 Argon2id profile solves in the browser and passes server verification', async ({ page }) => {
    await page.goto('/en/memory_hard');
    await page.getByLabel('Name', { exact: true }).fill('Ada');
    await page.getByLabel('Email', { exact: true }).fill('ada@example.test');
    await page.getByLabel('Message', { exact: true }).fill('Memory-hard proof-of-work');
    const host = page.locator('.nowo-altcha-type').first();
    await expect(host).toHaveAttribute('data-altcha-type-workers-url-value', /workers\/$/);
    await host.locator('altcha-widget label').first().click();
    await expect(host.locator('[data-altcha-type-target="input"]')).not.toHaveValue('', { timeout: 60000 });
    await page.getByRole('button', { name: 'Send' }).click();
    await expect(page.locator('.nowo-ui-flash--success')).toBeVisible();
  });
});
