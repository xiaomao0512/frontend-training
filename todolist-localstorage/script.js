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

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const task = input.value.trim();
      if (task !== "") {
        todos.push(task);
        input.value = "";
        save();
        render();
      }
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
