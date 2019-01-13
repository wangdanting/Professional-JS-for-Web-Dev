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
import ReactDOMRender from "./30-ReactDOMRender";
import UnmountComponentAtNode from "./31-unmountComponentAtNode";
import DangerouslySetInnerHTML from "./32-dangerouslySetInnerHTML";
import SyntheticEvent from "./33-SyntheticEvent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <ErrorBoundaries>
          <Route path="/" component={HelloWorld} />
          <Route path="/introduce-jsx/" component={IntroduceJsx} />
          <Route path="/rendering-elements/" component={RenderingElements} />
          <Route path="/components-and-props/" component={ComponentsAndProps} />
          <Route path="/state-and-lifecyle/" component={StateAndLifecyle} />
          <Route path="/handling-events/" component={HandlingEvents} />
          <Route
            path="/conditional-rendering/"
            component={ConditionalRendering}
          />
          <Route path="/lists-and-keys/" component={ListsAndKeys} />
          <Route path="/forms/" component={Forms} />
          <Route path="/lifting-state-up/" component={LiftingStateUp} />
          <Route
            path="/composition-vs-inheritance/"
            component={CompositionVsInheritance}
          />
          <Route path="/jsx-in-depth/" component={JSXInDepth} />
          <Route path="/propTypes/" component={PropTypes} />
          <Route path="/refs-and-DOM/" component={RefsAndDOM} />
          <Route
            path="/uncontrolled-components/"
            component={UncontrolledComponents}
          />
          <Route
            path="/optimizing-performance/"
            component={OptimizingPerformance}
          />
          <Route path="/conText/" component={ConText} />
          <Route path="/fragments/" component={Fragments} />
          <Route path="/portals/" component={Portals} />
          <Route
            path="/higher-order-components/"
            component={HigherOrderComponents}
          />
          <Route path="/clone-element/" component={CloneElement} />
          <Route path="/IsValidElement/" component={IsValidElement} />
          <Route path="/react-children/" component={ReactChildren} />
          <Route path="/dynamic-import/" component={DynamicImport} />
          <Route path="/react-lazy/" component={ReactLazy} />
          <Route path="/react-memo/" component={ReactMemo} />
          <Route
            path="/getDerivedStateFromProps/"
            component={GetDerivedStateFromProps}
          />
          <Route path="/react-dom-render/" component={ReactDOMRender} />
          <Route
            path="/unmountComponentAtNode/"
            component={UnmountComponentAtNode}
          />
          <Route
            path="/dangerouslySetInnerHTML/"
            component={DangerouslySetInnerHTML}
          />
          <Route path="/syntheticEvent/" component={SyntheticEvent} />
        </ErrorBoundaries>
      </Router>
    );
  }
}

export default App;
