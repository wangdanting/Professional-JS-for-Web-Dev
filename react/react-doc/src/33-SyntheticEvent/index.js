import React, { PureComponent } from "react";
//https://react.css88.com/docs/events.html 事件大集合
class SyntheticEvent extends PureComponent {
  handleClick = e => {
    console.log(e, "e");
  };
  render() {
    return <p onCopy={this.handleClick}>dddddd</p>;
  }
}
export default SyntheticEvent;
