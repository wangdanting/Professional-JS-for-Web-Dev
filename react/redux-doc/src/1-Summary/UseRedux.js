import React, { Component, Fragment } from "react";
import { createStore } from "redux";

const counter = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

class UseRedux extends Component {
  increment = () => {
    store.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    store.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </Fragment>
    );
  }
}

export default UseRedux;
