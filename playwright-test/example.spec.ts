import { test, expect } from '@playwright/test'

test('首頁標題應該正確', async ({ page }) => {
  await page.goto('https://example.com')
  await expect(page).toHaveTitle(/Example Domain/)
})
