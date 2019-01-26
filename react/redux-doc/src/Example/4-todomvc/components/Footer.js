import React from "react";
import FilterLink from "../containers/FilterLink";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../constants/TodoFilters";

const FILTER_TITLES = {
  [SHOW_ALL]: "All",
  [SHOW_ACTIVE]: "Active",
  [SHOW_COMPLETED]: "Completed"
};

const Footer = ({ activeCount, completedCount, onClearCompleted }) => {
  const itemWord = activeCount === 1 ? "item" : "items";
  return (
    <footer>
      <span>
        <strong>{activeCount || "No"}</strong>
        {itemWord} left
      </span>
      <ul>
        {Object.keys(FILTER_TITLES).map(filter => (
          <li key={filter}>
            <FilterLink filter={filter}>{FILTER_TITLES[filter]}</FilterLink>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button onClick={onClearCompleted}>Clear completed</button>
      )}
    </footer>
  );
};

export default Footer;
