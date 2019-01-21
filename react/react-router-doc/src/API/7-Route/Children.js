import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = () => <h3>Home</h3>;
const About = () => <h3>About</h3>;

const ListItemLink = ({ to, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => (
      <li className={match ? "active" : ""}>
        <Link to={to} {...rest} />
      </li>
    )}
  />
);

const Children = () => (
  <Router>
    <div>
      <ul>
        <ListItemLink to="/home">Home</ListItemLink>
        <ListItemLink to="/about">About</ListItemLink>
      </ul>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/About" component={About} />
      </Switch>
    </div>
  </Router>
);

export default Children;
