import React, { PureComponent, Fragment } from "react";
import Fragments from "../19-Fragments";

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
    console.log(this.props.children, "this.props.children");
    console.log(React.Children, "React.Children");
    return <div>ddfs</div>;
  }
}

class MySub extends PureComponent {
  render() {
    return <div>ss</div>;
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
