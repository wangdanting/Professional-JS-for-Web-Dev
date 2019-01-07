import React, { PureComponent, Fragment } from "react";

class UncontrolledComponents extends PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = null;
    this.fileRef = null;
  }
  setInputRef = element => {
    this.inputRef = element;
  };
  setFileRef = element => {
    this.fileRef = element;
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.inputRef.value, "xxx");
    console.log(this.fileRef.files[0].name, "xxx1");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input defaultValue="Bob" type="text" ref={this.setInputRef} />
          <input type="file" ref={this.setFileRef} />
          <input type="submit" value="Submit" />
        </label>
      </form>
    );
  }
}

export default UncontrolledComponents;
