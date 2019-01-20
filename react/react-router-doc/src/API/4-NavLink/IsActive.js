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

const oddEvent = (match, location) => {
  console.log(match, "match");
  console.log(location, "location");
  if (!match) {
    return false;
  }
  const eventID = parseInt(match.params.id);
  return !isNaN(eventID) && eventID % 2 === 1;
};

const IsActive = () => (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact to="/">
            root
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/123" isActive={oddEvent}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/home/:id" component={Home} />
        <Route path="/About" component={About} />
      </Switch>
    </div>
  </Router>
);

export default IsActive;
