import React, { PureComponent } from "react";

class MyParent extends PureComponent {
  render() {
    const child = React.Children.map(this.props.children, child => {
      return <div>dd</div>;
    });

    React.Children.forEach(this.props.children, child => {
      // console.log(child, "child");
    });

    const count = React.Children.count(this.props.children);

    // 返回children里仅有的子级。否则抛出异常
    // const onlyChild = React.Children.only(this.props.children);
    // console.log(onlyChild, "onlyChild");

    const toArray = React.Children.toArray(this.props.children);
    // console.log(toArray, "toArray");

    return (
      <div>
        我是爸爸
        {this.props.children}
      </div>
    );
  }
}

class MyChild extends PureComponent {
  render() {
    return <div>{this.props.children}</div>;
  }
}

class ReactChildren extends PureComponent {
  render() {
    return (
      <MyParent>
        <MyChild childId={"1"}>1</MyChild>
        <MyChild childId={"2"}>2</MyChild>
      </MyParent>
    );
  }
}

export default ReactChildren;
