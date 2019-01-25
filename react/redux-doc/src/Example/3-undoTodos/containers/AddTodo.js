import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addUTodos } from "../../actions/undoTodos";

class AddTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.input = null;
  }

  setInput = element => {
    this.input = element;
  };

  submit = e => {
    e.preventDefault();
    if (!this.input.value.trim()) {
      return;
    }
    this.props.dispatch(addUTodos(this.input.value));
    this.input.value = "";
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <input ref={this.setInput} />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default connect()(AddTodo);
