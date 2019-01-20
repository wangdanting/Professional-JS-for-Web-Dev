import React, { PureComponent } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";
import "./style.css";

const Home = () => <h3>Home</h3>;
const About = () => <h3>About</h3>;

class Nav extends PureComponent {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active">
            Homex
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    );
  }
}

const Solution = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div>
          <Nav location={location} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
      )}
    />
  </Router>
);

export default Solution;
