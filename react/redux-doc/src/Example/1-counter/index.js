import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/counter";

class Counter extends PureComponent {
  onIncrement = () => {
    this.props.dispatch(increment());
  };

  onDecrement = () => {
    this.props.dispatch(decrement());
  };

  incrementIfOdd = () => {
    const { counter } = this.props;
    if (counter % 2 !== 0) {
      this.onIncrement();
    }
  };

  incrementAsync = () => {
    setTimeout(this.onIncrement, 1000);
  };

  render() {
    const { counter } = this.props;
    return (
      <p>
        Clicked: {counter} times <button onClick={this.onIncrement}>+</button>{" "}
        <button onClick={this.onDecrement}>-</button>{" "}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>{" "}
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(Counter);
