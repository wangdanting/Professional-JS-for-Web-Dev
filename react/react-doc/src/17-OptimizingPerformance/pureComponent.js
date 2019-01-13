import React, { PureComponent, Fragment } from "react";

class PureComponent1 extends PureComponent {
  state = {
    words: ["marklar"]
  };

  handleChange = () => {
    const { words } = this.state;
    words.push("abc");
    this.setState({
      words
    });
  };

  handleChange1 = () => {
    this.setState(prevState => ({
      words: [...prevState.words, "abc"]
    }));
  };

  render() {
    const { words } = this.state;
    return (
      <Fragment>
        <p>{words.join()}</p>
        <button onClick={this.handleChange}>no join</button>
        <button onClick={this.handleChange1}>join</button>
      </Fragment>
    );
  }
}

export default PureComponent1;
