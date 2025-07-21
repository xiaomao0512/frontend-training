// tests/example.spec.ts
import { test, expect } from '@playwright/test'

test('首頁應顯示個人資料卡片', async ({ page }) => {
  // 使用絕對路徑開啟本地 HTML 檔案
  await page.goto('file:///C:/Users/pp22p/Desktop/test/frontend-training/profile-card/index.html')
  
  // 檢查頁面標題
  await expect(page.getByText('黃贊倫')).toBeVisible()
  
  // 檢查技能清單
  await expect(page.getByText('我會的技能')).toBeVisible()
  await expect(page.getByText('HTML')).toBeVisible()
  await expect(page.getByText('CSS')).toBeVisible()
  
  // 檢查學習步驟
  await expect(page.getByText('我的學習步驟')).toBeVisible()
  
  // 檢查留言板表單
  await expect(page.getByText('💬 留言板表單')).toBeVisible()
  await expect(page.getByRole('textbox', { name: '姓名' })).toBeVisible()
  await expect(page.getByRole('textbox', { name: '留言' })).toBeVisible()
})
