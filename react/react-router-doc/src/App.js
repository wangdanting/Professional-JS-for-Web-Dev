import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import Page1 from "./1-Page1";
import Page2 from "./2-Page2";
import NoContent from "./no-content";
import Login from "./4-Login";
import Page4 from "./5-Page4";
import Page5 from "./6-Page5";
import ScrollToTop from "./ScrollToTop";

import Basic from "./EXAMPLES/1-Basic";
import URLParameters from "./EXAMPLES/2-URLParameters";
import Redirects from "./EXAMPLES/3-Redirects";
import CustomLink from "./EXAMPLES/4-CustomLink";
import PreventingTransitions from "./EXAMPLES/5-PreventingTransitions";
import NoMatch from "./EXAMPLES/6-NoMatch";
import RecursivePaths from "./EXAMPLES/7-RecursivePaths";
import Sidebar from "./EXAMPLES/8-Sidebar";
import AnimatedTransitions from "./EXAMPLES/9-AnimatedTransitions";
import AmbiguousMatches from "./EXAMPLES/10-AmbiguousMatches";
import RouteConfig from "./EXAMPLES/11-RouteConfig";
import ModalGallery from "./EXAMPLES/12-ModalGallery";
import StaticRouterExample from "./EXAMPLES/13-StaticRouterExample";
import QueryParameters from "./EXAMPLES/14-QueryParameters";

import { BasicRouting, NestedRouting } from "./GUIDES/1-QuickStart";

class App extends Component {
  render() {
    return (
      // <Basic />
      // <URLParameters />
      // <Redirects />
      // <CustomLink />
      // <PreventingTransitions />
      // <NoMatch />
      // <RecursivePaths />
      // <Sidebar />
      // <AnimatedTransitions />
      // <AmbiguousMatches />
      // <RouteConfig />
      // <ModalGallery />
      // <StaticRouterExample />
      // <QueryParameters />

      // <BasicRouting />
      <NestedRouting />
    );
  }
}

export default App;
