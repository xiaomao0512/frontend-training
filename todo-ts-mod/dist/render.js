import { save } from "./storage.js";
export function render(todos, list, onUpdate) {
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerText = todo.text;
        if (todo.done)
            li.classList.add("done");
        li.addEventListener("click", () => {
            todos[index].done = !todos[index].done;
            save(todos);
            onUpdate(todos);
        });
        const del = document.createElement("button");
        del.innerText = "❌";
        del.addEventListener("click", (e) => {
            e.stopPropagation();
            todos.splice(index, 1);
            save(todos);
            onUpdate(todos);
        });
        li.appendChild(del);
        list.appendChild(li);
    });
}
