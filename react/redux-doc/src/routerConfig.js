import React from "react";
import { NoUseRedux, UseRedux } from "./1-Summary";
import { CoreConcepts } from "./2-Introduction";
import Counter from "./Example/1-counter";

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
  }
];

export default routes;
