import React from "react";
import Todo from "./Todo";

const TodoList = ({ uTodos, onUTodoClick }) => (
  <ul>
    {uTodos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={onUTodoClick} />
    ))}
  </ul>
);

export default TodoList;
