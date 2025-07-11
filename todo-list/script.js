const input = document.getElementById("todoInput");
const addBTN = document.getElementById("addBTN");
const list = document.getElementById("todoList");

let todos = [];

addBTN.addEventListener("click", () => {
    const task = input.value.trim();
    if (task !== "") {
        todos.push(task);
        input.value = "";
        renderTodos();
    }
});

function renderTodos() {
    list.innerHTML = "";
    todos.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
    });
}