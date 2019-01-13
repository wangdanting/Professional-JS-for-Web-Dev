import React, { PureComponent } from "react";

let interval = null;
class RenderingElements extends PureComponent {
  state = {
    time: new Date().toLocaleTimeString()
  };

  componentDidMount() {
    interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  tick = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  };

  render() {
    const { time } = this.state;
    return <h2>It is {time}</h2>;
  }
}

export default RenderingElements;
