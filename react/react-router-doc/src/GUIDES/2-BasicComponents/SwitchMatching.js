import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function About() {
  return <h3>About</h3>;
}

function Contact() {
  return <h3>Contact</h3>;
}

function NoMatch() {
  return <h3>NoMatch</h3>;
}

function SwitchMatching() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">NoMatch</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
export default SwitchMatching;
