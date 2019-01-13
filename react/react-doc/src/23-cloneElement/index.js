import React, { PureComponent } from "react";

class MyContainer extends PureComponent {
  state = {
    count: 1
  };

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    const { count } = this.state;
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        parentState: count,
        handleClick: this.handleClick
      })
    );
    return (
      <div style={{ border: "1px solid blue" }}>
        <span>父容器:</span>
        {childrenWithProps}
      </div>
    );
  }
}

class MySub extends PureComponent {
  render() {
    const { subInfo, parentState, handleClick } = this.props;
    return (
      <div>
        子元素：{subInfo}
        <br />
        父组件属性count值: {parentState}
        <button onClick={handleClick}>click me</button>
      </div>
    );
  }
}

class CloneElement extends PureComponent {
  state = {};

  render() {
    return (
      <MyContainer>
        <MySub subInfo={"1"} />
        <MySub subInfo={"2"} />
      </MyContainer>
    );
  }
}
export default CloneElement;
