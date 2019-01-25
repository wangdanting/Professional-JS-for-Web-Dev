import React, { Fragment } from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../../actions/undoTodos";
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const Footer = () => (
  <Fragment>
    <span>Show:</span>
    <FilterLink filter={SHOW_ALL}>All</FilterLink>
    <FilterLink filter={SHOW_ACTIVE}>SHOW_ACTIVE</FilterLink>
    <FilterLink filter={SHOW_COMPLETED}>SHOW_COMPLETED</FilterLink>
  </Fragment>
);

export default Footer;
