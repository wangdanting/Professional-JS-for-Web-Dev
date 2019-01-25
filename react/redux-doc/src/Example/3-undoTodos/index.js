import React, { Fragment } from "react";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

const UndoTodos = () => (
  <Fragment>
    <AddTodo />
    <VisibleTodoList />
  </Fragment>
);

export default UndoTodos;
