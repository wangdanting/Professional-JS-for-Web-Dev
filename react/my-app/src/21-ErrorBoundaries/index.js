import React, { PureComponent } from "react";

class ErrorBoundaries extends PureComponent {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
    console.log(error, "error");
    console.log(info, "info");
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    const abc = this.props.children;
    return <div>{abc}</div>;
  }
}

export default ErrorBoundaries;
