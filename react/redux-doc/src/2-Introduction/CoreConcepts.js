import React, { PureComponent, Fragment } from "react";

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
      return state.concat([{ text: action.text, completed: false }]);
    case "TOGGLE_TODO":
      return state.map((todo, index) =>
        action.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

const todoApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
};

class CoreConcepts extends PureComponent {
  state = todoApp(
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

  dispatch(action) {
    this.setState(prevState => todoApp(prevState, action));
  }

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
