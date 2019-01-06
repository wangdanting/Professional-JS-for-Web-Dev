import React, { Component, Fragment } from "react";
import HelloWorld from "./1-HelloWorld";
import IntroduceJsx from "./2-IntroduceJsx";
import RenderingElements from "./3-RenderingElements";
import ComponentsAndProps from "./4-ComponentsAndProps";
import StateAndLifecyle from "./5-StateAndLifecyle";
import HandlingEvents from "./6-HandlingEvents";
import ConditionalRendering from "./7-ConditionalRendering";
import ListsAndKeys from "./8-ListsAndKeys";
import Forms from "./9-Forms";
import LiftingStateUp from "./10-LiftingStateUp";
import CompositionVsInheritance from "./11-CompositionVsInheritance";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HelloWorld />
        <IntroduceJsx />
        <RenderingElements />
        <ComponentsAndProps />
        <StateAndLifecyle />
        <HandlingEvents />
        <ConditionalRendering />
        <ListsAndKeys />
        <Forms />
        <LiftingStateUp />
        <CompositionVsInheritance />
      </Fragment>
    );
  }
}

export default App;
