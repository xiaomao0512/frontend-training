const { test, expect } = require('@playwright/test');

// 使用 file:// 協定開啟本地 HTML
const path = require('path');
const fileUrl = 'file://' + path.resolve(__dirname, '../index.html');

test('可以新增待辦事項', async ({ page }) => {
  await page.goto(fileUrl);
  await page.fill('#todo-input', '買牛奶');
  await page.click('#add-btn');
  const todoText = await page.textContent('#todo-list li');
  expect(todoText).toBe('買牛奶');
}); 