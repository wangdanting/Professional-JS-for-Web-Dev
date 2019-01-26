import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends PureComponent {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    completeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  };

  handleComplete = () => {
    const {
      todo: { id },
      completeTodo
    } = this.props;
    completeTodo(id);
  };

  delete = () => {
    const {
      todo: { id },
      deleteTodo
    } = this.props;
    deleteTodo(id);
  };
  render() {
    const {
      todo: { text, completed }
    } = this.props;
    const element = (
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleComplete}
        />
        <label>{text}</label>
        <button onClick={this.delete}>删除</button>
      </div>
    );
    return <li>{element}</li>;
  }
}
