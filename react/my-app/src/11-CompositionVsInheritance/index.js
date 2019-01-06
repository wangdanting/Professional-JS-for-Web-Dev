import React, { PureComponent, Fragment } from "react";

function Hello(props) {
  return <p>Hello</p>;
}

function World(props) {
  return <p>World</p>;
}

// 一个入口
function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

//多个入口
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

class CompositionVsInheritance extends PureComponent {
  handleClick = () => {
    console.log("xxx");
  };
  render() {
    return (
      <Fragment>
        <FancyBorder color="blue">
          <h1 className="Dialog-title">Welcome</h1>
          <p className="Dialog-message">
            Thank you for visiting our spacecraft!
          </p>
          <button onClick={this.handleClick}>Button</button>
        </FancyBorder>
        <SplitPane left={<Hello />} right={<World />} />
      </Fragment>
    );
  }
}

export default CompositionVsInheritance;
