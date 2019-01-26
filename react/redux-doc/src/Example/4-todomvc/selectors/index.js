import { createSelector } from "reselect";

const getTodos = state => state.mTodos;

export const getCompletedTodoCount = createSelector(
  [getTodos],
  todos =>
    todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)
);
