import { test, expect } from '@playwright/test'

test('可以新增一筆代辦', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await page.fill('#todo-input', '吃早餐')
  await page.click('#add-btn')

  await expect(page.getByText('吃早餐')).toBeVisible()
})
