# JavaScript 學習筆記（2025-07-11）

## ✅ 已學會的核心知識

### 1. 變數宣告
- `let`：可重新指定的變數
- `const`：不可重新指定的常數（常用於設定不會變的資料）

### 2. 控制流程
- `if / else`：條件判斷
- `for`：迴圈重複執行
- `function`：封裝可以重複執行的動作

### 3. 陣列處理
- `.map()`：將陣列元素轉換成新陣列
- `.filter()`：過濾陣列中符合條件的元素
- `.forEach()`：對每個元素做事（不回傳新陣列）

### 4. DOM 操作
- DOM：Document Object Model，瀏覽器中 HTML 的 JavaScript 版本
- `document.getElementById("id")`：抓取 HTML 元素
- `document.querySelector("CSS選擇器")`：更彈性的抓元素
- `.innerText`：設定/讀取元素文字
- `.appendChild()`：新增元素進去
- `<ul>`：無順序清單（unordered list）
- `<li>`：清單項目

### 5. 非同步與資料請求
- `fetch(url)`：發送網路請求
- `.then()`：當非同步完成後執行
- `.catch()`：錯誤處理
- `Promise`：非同步結果的包裝器
- `async function`：定義可以用 `await` 的函數
- `await`：等待 Promise 完成，才往下執行

---

## 🧪 實作回顧
- 成功用 fetch 抓取 API 資料（`https://jsonplaceholder.typicode.com/users`）
- 用 JS 建立 `<li>` 元素，加入 `<ul>` 清單
- 清楚理解 `res`, `res.json()`, `user.name`, `user.email` 的含義
- 搞懂了 `async` / `await` 的作用：讓程式碼更像「同步」的邏輯流程
