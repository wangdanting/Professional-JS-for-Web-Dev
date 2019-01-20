import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
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
import {
  Routers,
  RouteMatching,
  SwitchMatching,
  RouteRenderingProps,
  Navigation
} from "./GUIDES/2-BasicComponents";
import { ScrollToTop } from "./GUIDES/3-ScrollRestoration";
import ResponsiveRoutes from "./GUIDES/4-ResponsiveRoutes";

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
      // <NestedRouting />
      // <Routers />
      // <RouteMatching />
      // <SwitchMatching />
      // <RouteRenderingProps />
      // <Navigation />
      // <ScrollToTop />
      <ResponsiveRoutes />
    );
  }
}

export default App;
