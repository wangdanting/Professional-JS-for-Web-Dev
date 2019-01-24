import React, { PureComponent } from "react";

class Todo extends PureComponent {
  handleClick = () => {
    const { id, onClick } = this.props;
    onClick(id);
  };
  render() {
    const { text, completed } = this.props;
    return (
      <li
        onClick={this.handleClick}
        style={{
          textDecoration: completed ? "line-through" : "none"
        }}
      >
        {text}
      </li>
    );
  }
}
export default Todo;
