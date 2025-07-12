"use strict";
// 資料儲存模組
function save(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function load() {
    return JSON.parse(localStorage.getItem("todos") || "[]");
}
// 渲染模組
function render(todos, list, onChange) {
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerText = todo.text;
        if (todo.done)
            li.classList.add("done");
        li.addEventListener("click", () => {
            todos[index].done = !todos[index].done;
            save(todos);
            onChange(todos);
        });
        const delBtn = document.createElement("button");
        delBtn.innerText = "❌";
        delBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            todos.splice(index, 1);
            save(todos);
            onChange(todos);
        });
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}
// 主程式：綁定按鈕、處理事件
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");
let todos = load();
// 更新畫面
function update() {
    render(todos, list, (updated) => {
        todos = updated;
        render(todos, list, update);
    });
}
addBtn.addEventListener("click", () => {
    const task = input.value.trim();
    if (task !== "") {
        todos.push({ text: task, done: false });
        input.value = "";
        save(todos);
        update();
    }
});
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter")
        addBtn.click();
});
// 初次畫面
update();
