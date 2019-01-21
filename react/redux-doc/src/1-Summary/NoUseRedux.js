import React, { Component, Fragment } from "react";

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

class NoUseRedux extends Component {
  state = counter(undefined, {});

  dispatch(action) {
    this.setState(prevState => counter(prevState, action));
  }

  increment = () => {
    this.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <Fragment>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </Fragment>
    );
  }
}

export default NoUseRedux;
