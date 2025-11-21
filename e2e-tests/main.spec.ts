import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("react-router-from-zero-to-hero");
});

test("has hello world", async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText(/Hello world from the server!/i)).toBeVisible();
});
