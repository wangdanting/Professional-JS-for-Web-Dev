import React, { Fragment } from "react";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

const Todos = () => (
  <Fragment>
    <AddTodo />
    <VisibleTodoList />
  </Fragment>
);

export default Todos;
