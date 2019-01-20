import React, { PureComponent } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

const Home = () => {
  return <div>Home</div>;
};

const About = () => {
  return <div>About</div>;
};

const ResponsiveRoutes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  </Router>
);
export default ResponsiveRoutes;
