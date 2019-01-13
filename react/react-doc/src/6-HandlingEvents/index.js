import React, { PureComponent, Fragment } from "react";

class HandlingEvents extends PureComponent {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  handleDefault = e => {
    e.preventDefault();
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  handlePassingArg = (text, e) => {
    e.preventDefault();
  };

  render() {
    const { counter } = this.state;

    return (
      <Fragment>
        <span>{counter}</span>
        <button onClick={this.handleClick}>Button</button>
        <a href="h" onClick={this.handleDefault}>
          a label
        </a>
        <a href="h" onClick={this.handlePassingArg.bind(this, "abc")}>
          a label
        </a>
      </Fragment>
    );
  }
}
export default HandlingEvents;
