import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions/todos";

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
    this.props.dispatch(addTodo(this.input.value));
    this.input.value = "";
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.submit}>
          <input ref={this.setInput} />
          <button type="submit">Add Todo</button>
        </form>
      </Fragment>
    );
  }
}

export default connect()(AddTodo);
