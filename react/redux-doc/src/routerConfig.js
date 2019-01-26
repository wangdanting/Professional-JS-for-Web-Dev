import React from "react";
import { NoUseRedux, UseRedux } from "./1-Summary";
import { CoreConcepts } from "./2-Introduction";
import { Counter, Todos, UndoTodos, Todomvc } from "./Example";

const routes = [
  {
    path: "/",
    exact: true,
    name: "NoUseRedux",
    main: () => <NoUseRedux />
  },
  {
    path: "/summary/NoUseRedux",
    name: "NoUseRedux",
    main: () => <NoUseRedux />
  },
  {
    path: "/summary/UseRedux",
    name: "UseRedux",
    main: () => <UseRedux />
  },
  {
    path: "/introduction/CoreConcepts",
    name: "CoreConcepts",
    main: () => <CoreConcepts />
  },
  {
    path: "/example/counter",
    name: "counter",
    main: () => <Counter />
  },
  {
    path: "/example/todos",
    name: "todos",
    main: () => <Todos />
  },
  {
    path: "/example/undoTodos",
    name: "undoTodos",
    main: () => <UndoTodos />
  },
  {
    path: "/example/todomvc",
    name: "todomvc",
    main: () => <Todomvc />
  }
];

export default routes;
