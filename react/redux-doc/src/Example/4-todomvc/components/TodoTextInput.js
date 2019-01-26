import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class TodoTextInput extends PureComponent {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };

  state = {
    text: ""
  };

  handleSubmit = e => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      this.setState({
        text: ""
      });
    }
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    const { placeholder } = this.props;
    const { text } = this.state;
    return (
      <input
        type="text"
        placeholder={placeholder}
        autoFocus={true}
        value={text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}
