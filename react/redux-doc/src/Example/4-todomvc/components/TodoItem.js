import React, { PureComponent } from "react";

export default class TodoItem extends PureComponent {
  render() {
    const {
      todo: { text }
    } = this.props;
    return <li>{text}</li>;
  }
}
