import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ShowTheLocation from "./ShowTheLocation";

const Home = () => <h3>Home</h3>;
const About = () => <ShowTheLocation />;

const WithRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
      </Switch>
    </div>
  </Router>
);

export default WithRouter;
