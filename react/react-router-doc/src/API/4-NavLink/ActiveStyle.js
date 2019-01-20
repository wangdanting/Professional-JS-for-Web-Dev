import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";

const Root = () => <h3>Rooot</h3>;
const Home = props => <h3>Home</h3>;
const About = () => <h3>About</h3>;

const ActiveStyle = () => (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            root
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home"
            activeStyle={{
              fontWeight: "bold",
              color: "yellow"
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeStyle={{
              fontWeight: "bold",
              color: "green"
            }}
          >
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

export default ActiveStyle;
