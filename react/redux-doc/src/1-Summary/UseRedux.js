import React, { Fragment } from "react";
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

const increment = () => {
  store.dispatch({ type: "INCREMENT" });
};

const decrement = () => {
  store.dispatch({ type: "DECREMENT" });
};

const UseRedux = () => {
  return (
    <Fragment>
      {store.getState().value}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </Fragment>
  );
};

store.subscribe(() => console.log(store.getState(), "dd"));

export default UseRedux;
