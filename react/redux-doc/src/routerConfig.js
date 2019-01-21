import React from "react";
import { NoUseRedux, UseRedux } from "./1-Summary";

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
  }
];

export default routes;
