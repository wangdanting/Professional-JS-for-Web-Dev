import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import JSXInDepth from "./13-JSXInDepth";
import PropTypes from "./14-PropTypes";
import RefsAndDOM from "./15-RefsAndDOM";
import UncontrolledComponents from "./16-UncontrolledComponents";
import OptimizingPerformance from "./17-OptimizingPerformance";
import ConText from "./18-Context";
import Fragments from "./19-Fragments";
import Portals from "./20-Portals";
import ErrorBoundaries from "./21-ErrorBoundaries";
import HigherOrderComponents from "./22-HigherOrderComponents";
import CloneElement from "./23-cloneElement";
import IsValidElement from "./24-isValidElement";
import ReactChildren from "./25-ReactChildren";
import DynamicImport from "./26-DynamicImport";
import ReactLazy from "./27-ReactLazy";
import ReactMemo from "./28-ReactMemo";
import GetDerivedStateFromProps from "./29-getDerivedStateFromProps";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <ErrorBoundaries>
          <Route path="/" component={HelloWorld} />
          <Route path="/introduce-jsx/" component={IntroduceJsx} />
        </ErrorBoundaries>
      </Router>
      // <ErrorBoundaries>
      //   <HelloWorld />
      //   <IntroduceJsx />
      //   <RenderingElements />
      //   <ComponentsAndProps />
      //   <StateAndLifecyle />
      //   <HandlingEvents />
      //   <ConditionalRendering />
      //   <ListsAndKeys />
      //   <Forms />
      //   <LiftingStateUp />
      //   <CompositionVsInheritance />
      //   <JSXInDepth />
      //   <PropTypes />
      //   <RefsAndDOM />
      //   <UncontrolledComponents />
      //   <OptimizingPerformance />
      //   <ConText />
      //   <Fragments />
      //   <Portals />
      //   <HigherOrderComponents />
      //   <CloneElement />
      //   <IsValidElement />
      //   <ReactChildren />
      //   <DynamicImport />
      //   <ReactLazy />
      //   <ReactMemo />
      //   <GetDerivedStateFromProps />
      // </ErrorBoundaries>
    );
  }
}

export default App;
