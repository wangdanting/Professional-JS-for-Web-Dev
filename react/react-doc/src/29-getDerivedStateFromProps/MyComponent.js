import React, { PureComponent, Fragment } from "react";

class MyComponent extends PureComponent {
  state = {
    num: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.num !== prevState.num) {
      return {
        num: nextProps.num
      };
    }
    return null;
  }

  handleClick = () => {
    this.setState(prevState => ({
      num: prevState.d + 1
    }));
  };

  render() {
    const { num } = this.state;
    return (
      <Fragment>
        <p>{num}</p>
        <button onClick={this.handleClick}>click</button>
      </Fragment>
    );
  }
}
export default MyComponent;
