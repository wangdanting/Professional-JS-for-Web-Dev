import React, { PureComponent, Fragment } from "react";
import MyComponent from "./MyComponent";

class ReactMemo extends PureComponent {
  state = {
    name: "a"
  };

  handleClick = () => {
    this.setState({
      name: "b"
    });
  };

  render() {
    const { name } = this.state;
    return (
      <Fragment>
        <MyComponent name={name} />
        <button onClick={this.handleClick}>click</button>
      </Fragment>
    );
  }
}

export default ReactMemo;
