import { Todo, load, save } from "./storage.js";
import { render } from "./render.js";

const input = document.getElementById("todoInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const list = document.getElementById("todoList") as HTMLUListElement;

let todos: Todo[] = load();

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
  if (e.key === "Enter") addBtn.click();
});

update();
