import React, { Component, Fragment } from "react";
import HelloWorld from "./1-HelloWorld";
import IntroduceJsx from "./2-IntroduceJsx";
import RenderingElements from "./3-RenderingElements";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HelloWorld />
        <IntroduceJsx />
        <RenderingElements />
      </Fragment>
    );
  }
}

export default App;
