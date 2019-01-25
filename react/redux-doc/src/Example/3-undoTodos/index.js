import React, { Fragment } from "react";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";
import UndoRedo from "./containers/UndoRedo";

const UndoTodos = () => (
  <Fragment>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
  </Fragment>
);

export default UndoTodos;
