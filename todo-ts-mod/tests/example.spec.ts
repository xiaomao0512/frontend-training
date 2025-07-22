import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/todo-ts-mod/index.html');
  await page.getByRole('textbox', { name: '輸入任務' }).click();
  await page.getByRole('textbox', { name: '輸入任務' }).fill('12345');
  await page.getByRole('button', { name: '新增' }).click();
  await page.getByRole('textbox', { name: '輸入任務' }).click();
  await page.getByRole('textbox', { name: '輸入任務' }).fill('2424');
  await page.getByRole('textbox', { name: '輸入任務' }).fill('24244');
  await page.getByRole('button', { name: '新增' }).click();
  await page.getByText('24244❌').click();
  await page.getByText('12345❌').click();
  await page.getByRole('listitem').filter({ hasText: '24244❌' }).getByRole('button').click();
  await page.getByRole('button', { name: '❌' }).click();
});