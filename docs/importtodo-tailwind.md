# 🧠 Todo List 專案心得筆記

## 🗓️ 學習主題
- TypeScript 基礎 + 嚴格模式使用
- 模組化拆分：`storage.ts`, `render.ts`, `main.ts`
- 使用 `localStorage` 儲存資料
- 用原生 JS 操作 DOM
- Tailwind CSS 快速整合（CDN）

---

## 🧩 我學會的關鍵技能

### 1. TypeScript 模組化架構
- 把資料邏輯獨立成 `storage.ts`
- 畫面邏輯寫在 `render.ts`
- 主程式只處理事件（`main.ts`）
- 使用 `export/import` 管理跨檔案程式碼

### 2. localStorage 應用
- 使用 `localStorage.getItem()` 和 `setItem()` 存資料
- 學會用 `JSON.parse()` 與 `JSON.stringify()` 處理陣列

### 3. DOM 操作與事件綁定
- `document.createElement()` 動態產生元素
- `addEventListener()` 綁定點擊 / 鍵盤事件
- 操控 `classList.add()` 來加上 CSS 效果

### 4. Tailwind CSS 快速套用樣式
- 使用 CDN 快速整合
- 元素加上 `bg-gray-100`, `rounded`, `hover:` 等實用樣式
- 瞬間美化 UI，不需要寫 CSS

---

## 💡 我的收穫

- 原本用一支 JS 寫完所有功能，但程式碼越來越難維護
- 學會把功能拆分成模組後，程式變得清楚又容易修改
- 一開始不懂 `strict`、`as`、`moduleResolution`，但實際操作後理解更多
- Tailwind 很方便，甚至不用寫 CSS 就能快速打造出乾淨 UI
- TypeScript + Tailwind 是很實用的前端組合

---

## 🔜 下一步我想學：
- 用 Vite 重構整個開發流程
- 讓 Tailwind 支援自訂樣式和 @apply
- 學會把專案部署到 GitHub Pages
- 整合 Git / GitHub 流程

---

## 💬 總結
從 JS → TS → 模組化 → Tailwind，我對整體開發流程有更清楚的認識。  
未來如果要開發比較正式的前端專案，這種做法會讓程式碼更容易維護與擴充。  
這次的 Todo List 專案不只是完成 UI，更讓我學會了真正的前端開發流程。

