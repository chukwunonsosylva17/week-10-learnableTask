# Todo List in TypeScript

This is a command-line Todo List application built using TypeScript which is contained in the source folder. The application allows users to efficiently manage their tasks by adding, updating, marking as completed, removing, and filtering tasks.

## Task Breakdown

The goal of this project was to create a structured and interactive task management system using TypeScript. The application enables users to:

- Add new tasks with a unique ID and a due date.
- Mark tasks as completed.
- Remove tasks from the list individually or clear all completed tasks.
- View all tasks along with their status.
- Filter tasks based on their completion status (completed or pending).
- Update task descriptions for better clarity.

The project demonstrates key TypeScript concepts such as interfaces, classes, access modifiers, and array manipulation methods.

The compiled javascript codes of the typescript file is contained in the distribution (dist) folder.

---

## Implementation Details

The core of this project revolves around two main components:

1. The `TodoItem` interface – Defines the structure of a task.
2. The `TodoList` class – Manages the collection of tasks and provides methods for interacting with them.

### `TodoItem` Interface

Each task is represented as an object with the following properties:

```ts
interface TodoItem {
  id: number; // Unique identifier for each task
  task: string; // Task description
  completed: boolean; // Status of task (true = completed, false = pending)
  dueDate?: Date; // Due date for the task
}
```

### Package Installations

## npm init -g
This is used to get all the default options in the node modules.

## npm i --save-dev typescript 
This is used to download typescript as a dev dependency because it is not required for production.

## npx tsc --init
This is used to run the typescript in the project.

## npm start or tsc --watch
The start script is running the tsc command with **tsc --watch**  to track the changes made on the typescript file as far as the start script is running it will automatically recompile the javascript file for us instead of doing it manually everytime.