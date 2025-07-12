"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = save;
exports.load = load;
function save(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function load() {
    return JSON.parse(localStorage.getItem("todos") || "[]");
}
