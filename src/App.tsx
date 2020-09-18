import React, { useState } from "react";

import { AddTodoForm } from "./components/add-todo-form";
import { TodoList } from "./components/todo-list";

const initialTodos: Todo[] = [
  {
    text: "Write app",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];
export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}
