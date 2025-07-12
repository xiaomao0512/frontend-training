import { load, save, Todo } from "./storage.js";

let todos: Todo[] = load();

function addTodo(text: string) {
  todos.push({ text, done: false });
  save(todos);
  console.log("目前清單：", todos);
}

addTodo("買牛奶");
