import React, { PureComponent, Fragment } from "react";
import MyComponent from "./MyComponent";

class GetDerivedStateFromProps extends PureComponent {
  state = {
    num: 0
  };

  handleClick = () => {
    this.setState(prevState => ({
      num: Number(prevState.num) + 1
    }));
  };

  render() {
    const { num } = this.state;
    return (
      <Fragment>
        <MyComponent num={num.toString()} />
        <button onClick={this.handleClick}>click1</button>
      </Fragment>
    );
  }
}
export default GetDerivedStateFromProps;
