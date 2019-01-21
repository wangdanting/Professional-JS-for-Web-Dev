import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = () => <h3>Home</h3>;
const About = () => <h3>About</h3>;

const Path = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/abc">Abc</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route path={["/home", "/abc"]} component={Home} />
        <Route path="/About" component={About} />
      </Switch>
    </div>
  </Router>
);

export default Path;
