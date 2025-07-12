## 📄 HTML：index.html（不變）

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <title>Todo List with localStorage</title>
</head>
<body>
  <h1>📝 我的待辦清單</h1>

  <input type="text" id="todoInput" placeholder="輸入任務內容" />
  <button id="addBtn">新增任務</button>

  <ul id="todoList"></ul>

  <script src="script.js"></script>
</body>
</html>
```

---

## 💻 JavaScript：script.js（localStorage 版本）

```js
// DOM 元素
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

// 初始化任務資料（從 localStorage 取出或用空陣列）
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// 頁面一開始就先渲染
render();

// 點擊「新增任務」按鈕
addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task !== "") {
    todos.push(task); // 加到陣列
    input.value = ""; // 清空輸入框
    save();           // 存入 localStorage
    render();         // 重新渲染
  }
});

// 渲染畫面
function render() {
  list.innerHTML = ""; // 清空舊任務
  todos.forEach(task => {
    const li = document.createElement("li");
    li.innerText = task;
    list.appendChild(li);
  });
}

// 將 todos 存入 localStorage
function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
```

---

## 📌 技術回顧

| 技術 | 用途 |
|------|------|
| `localStorage.setItem(key, value)` | 存資料（需先轉成字串） |
| `localStorage.getItem(key)` | 拿資料（字串 → 用 `JSON.parse` 還原） |
| `JSON.stringify()` | 陣列/物件 → 字串 |
| `JSON.parse()` | 字串 → 陣列/物件 |
| `|| []` | 如果沒有資料，就給一個空陣列預設值 |

---

## 🔚 小結

你已經完成：
- 第一版 Todo List（記憶體中）
- 第二版 Todo List（加入 localStorage，資料永久保存）

下一步建議挑戰：
- [ ] Enter 鍵也能新增
- [ ] 每個任務加入「刪除按鈕」
- [ ] 支援完成 / 未完成狀態切換
