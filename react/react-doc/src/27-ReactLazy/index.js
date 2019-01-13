import React, { PureComponent, Suspense, Fragment } from "react";
// import OtherComponent from "./OtherComponent";

const OtherComponent = React.lazy(() => import("./OtherComponent"));

class Child extends PureComponent {
  render() {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <OtherComponent />
      </Suspense>
    );
  }
}

class ReactLazy extends PureComponent {
  state = {
    showChild: false
  };

  handleClick = () => {
    this.setState({
      showChild: true
    });
  };
  render() {
    const { showChild } = this.state;
    return (
      <Fragment>
        {showChild ? <Child /> : null}
        <button onClick={this.handleClick}>change</button>
      </Fragment>
    );
  }
}
export default ReactLazy;
