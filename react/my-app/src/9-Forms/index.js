import React, { PureComponent } from "react";

class Forms extends PureComponent {
  state = {
    input: "",
    favorite: "apple"
  };

  handleChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { input, favorite } = this.state;
    console.log(input, "input");
    console.log(favorite, "favorite");
  };

  render() {
    const { input, favorite } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="input"
            value={input}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Favorite:
          <select name="favorite" value={favorite} onChange={this.handleChange}>
            <option value="apple">apple</option>
            <option value="banana">banana</option>
            <option value="orange">orange</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Forms;
