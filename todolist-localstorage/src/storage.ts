export type Todo = { text: string; done: boolean };

export function save(todos: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function load(): Todo[] {
  return JSON.parse(localStorage.getItem("todos") || "[]");
}
