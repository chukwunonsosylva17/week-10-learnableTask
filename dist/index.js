"use strict";
class TodoList {
    constructor() {
        this.todos = [];
        this.todos = [];
        this.nextId = 1;
    }
    addTodo(task, dueDate) {
        const newTodo = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
        };
        this.todos.push(newTodo);
    }
    completeTodo(id) {
        const todo = this.findTodoById(id);
        todo.completed = true;
    }
    removeTodo(id) {
        const index = this.findTodoIndexById(id);
        this.todos.splice(index, 1);
    }
    listTodos(filter) {
        switch (filter) {
            case 'all':
                return [...this.todos];
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            case 'pending':
                return this.todos.filter(todo => !todo.completed);
            default:
                return [...this.todos];
        }
    }
    filterByCompleted(completed) {
        return this.todos.filter(todo => todo.completed === completed);
    }
    updateTodoTask(id, newTask) {
        const todo = this.findTodoById(id);
        todo.task = newTask;
    }
    clearCompletedTodos() {
        this.todos = this.todos.filter(todo => !todo.completed);
    }
    findTodoById(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) {
            throw new Error(`Todo with ID ${id} not found`);
        }
        return todo;
    }
    findTodoIndexById(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index === -1) {
            throw new Error(`Todo with ID ${id} not found`);
        }
        return index;
    }
}
const todoList = new TodoList();
todoList.addTodo("Learn Coding", new Date("2025-02-01"));
todoList.addTodo("Build a Todo App", new Date("2025-03-05"));
todoList.addTodo("Attend SOTU Meeting", new Date("2025-03-02"));
todoList.addTodo("Review weekly reports", new Date("2025-03-10"));
todoList.addTodo("Prepare for a Coding Interview", new Date("2025-03-20"));
todoList.listTodos();
console.log(todoList.listTodos());
todoList.completeTodo(1);
todoList.completeTodo(3);
console.log(todoList.listTodos("completed"));
todoList.updateTodoTask(2, "Build a Todo App With Authentication");
console.log(todoList.listTodos());
todoList.filterByCompleted(true);
console.log(todoList.filterByCompleted(true));
todoList.filterByCompleted(false);
console.log(todoList.filterByCompleted(false));
todoList.removeTodo(4);
console.log(todoList.listTodos());
todoList.clearCompletedTodos();
console.log(todoList.listTodos());
todoList.listTodos();
console.log(todoList.listTodos());
//# sourceMappingURL=index.js.map