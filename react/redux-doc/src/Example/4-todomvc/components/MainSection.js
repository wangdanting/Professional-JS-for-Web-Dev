import React from "react";
import PropTypes from "prop-types";
import VisibleTodoList from "../containers/VisibleTodoList";

const MainSection = ({ todosCount, completedCount, actions }) => (
  <section className="main">
    {!!todosCount && (
      <span>
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todosCount}
          readOnly
        />
        <label onClick={actions.completeAllTodos} />
      </span>
    )}
    <VisibleTodoList />
  </section>
);

export default MainSection;
