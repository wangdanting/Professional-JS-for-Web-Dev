import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = ({ match, location, history }) => {
  return <h3>Home{match.params.id}</h3>;
};
const About = () => <h3>About</h3>;

const ComponentCom = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/home/123">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/home/:id" component={Home} />
        <Route path="/About" component={About} />
      </Switch>
    </div>
  </Router>
);

export default ComponentCom;
