import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = () => <h3>Home</h3>;
const About = props => <h3>About</h3>;
const NoMatchCom = () => <h3>No Match</h3>;

const NoMatch = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">NoMatch</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route component={NoMatchCom} />
      </Switch>
    </div>
  </Router>
);

export default NoMatch;
