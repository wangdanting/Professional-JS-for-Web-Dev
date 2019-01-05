import React, { PureComponent, Fragment } from "react";
import Extracting from "./extracting";
import avatarImg from "../logo.svg";

function Welcome(props) {
  return <h1>define components name is {props.name}</h1>;
}

class Hello extends PureComponent {
  render() {
    const { name } = this.props;
    return <h1>define component name is {name}</h1>;
  }
}

const world = <Welcome name="Welcome world" />;

const author = {
  avatarUrl: avatarImg,
  name: "react"
};

class ComponentsAndProps extends PureComponent {
  render() {
    return (
      <Fragment>
        <Welcome name="Welcome" />
        <Hello name="Hello" />
        <Extracting
          author={author}
          text="Don’t be afraid to split components into smaller components."
          date={new Date().toLocaleTimeString()}
        />
        {world}
      </Fragment>
    );
  }
}

export default ComponentsAndProps;
