"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_js_1 = require("./storage.js");
let todos = (0, storage_js_1.load)();
function addTodo(text) {
    todos.push({ text, done: false });
    (0, storage_js_1.save)(todos);
    console.log("目前清單：", todos);
}
addTodo("買牛奶");
