import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const About = () => <h3>About</h3>;

const FadingRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

const Render = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/home/123">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/home" render={() => <h3>Home</h3>} />
        <FadingRoute path="/About" component={About} />
      </Switch>
    </div>
  </Router>
);

export default Render;
