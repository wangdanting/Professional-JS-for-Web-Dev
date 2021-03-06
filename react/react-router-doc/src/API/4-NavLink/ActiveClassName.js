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
const Home = props => <h3>Home</h3>;
const About = () => <h3>About</h3>;

const ActiveClassName = () => (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active1">
            root
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" activeClassName="active1">
            Home
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

export default ActiveClassName;
