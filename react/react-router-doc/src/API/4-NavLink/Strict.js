import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import "./style.css";

const Root = () => <h3>Rooot</h3>;
const Home = () => <h3>Home</h3>;
const About = () => <h3>About</h3>;

const Strict = () => (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active1">
            root
          </NavLink>
        </li>
        <li>
          <NavLink strict to="/home/" activeClassName="active1">
            Home1
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active1">
            About
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/home" component={Home} />
        <Route path="/About" component={About} />
      </Switch>
    </div>
  </Router>
);

export default Strict;
