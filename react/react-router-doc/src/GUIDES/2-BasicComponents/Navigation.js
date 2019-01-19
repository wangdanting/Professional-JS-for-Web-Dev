import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

import "./style.css";

function About(props) {
  return <h3>About</h3>;
}

function Contact() {
  return <h3>Contact</h3>;
}

function Navigation() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Redirect</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect from="/" to="/about" />}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
export default Navigation;
