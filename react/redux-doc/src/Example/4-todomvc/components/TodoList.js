import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ filteredTodos }) => (
  <ul className="todo-list">
    {filteredTodos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);

export default TodoList;
