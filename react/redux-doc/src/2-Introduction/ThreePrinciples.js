import React, { PureComponent, Fragment } from "react";
import { combineReducers, createStore } from "redux";

const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          });
        }
        return todo;
      });
    default:
      return state;
  }
};

const reducer = combineReducers({ visibilityFilter, todos });
const store = createStore(reducer);

class CoreConcepts extends PureComponent {
  state = store(
    {
      todos: [
        {
          text: "Eat food",
          completed: true
        },
        {
          text: "Exercise",
          completed: false
        }
      ],
      visibilityFilter: "SHOW_COMPLETED"
    },
    {}
  );

  AddTodo = () => {
    this.dispatch({ type: "ADD_TODO", text: "Go to swimming pool" });
  };

  TOGGLETODO = () => {
    this.dispatch({ type: "TOGGLE_TODO", index: 1 });
  };

  Filter = () => {
    this.dispatch({ type: "SET_VISIBILITY_FILTER", filter: "SHOW_ALL" });
  };

  render() {
    const { todos, visibilityFilter } = this.state;
    const todosFrag = todos.map(item => (
      <Fragment key={item.text}>
        <dt>{item.text}</dt>
        <dd>{String(item.completed)}</dd>
      </Fragment>
    ));
    return (
      <Fragment>
        <dl>{todosFrag}</dl>
        <div>visibilityFilter: {visibilityFilter}</div>
        <button onClick={this.AddTodo}>addTodo</button>
        <button onClick={this.TOGGLETODO}>TOGGLETODO</button>
        <button onClick={this.Filter}>Filter</button>
      </Fragment>
    );
  }
}

export default CoreConcepts;
