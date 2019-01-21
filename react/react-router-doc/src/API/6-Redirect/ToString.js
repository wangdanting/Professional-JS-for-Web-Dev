import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const Login = () => <h3>Login</h3>;
const Home = props => {
  console.log(props, "props");
  return <h3>Home</h3>;
};
const About = () => <h3>About</h3>;

const loggedIn = true;

const ToString = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (loggedIn ? <Redirect to="/home" /> : <Login />)}
        />
        <Route path="/home" component={Home} />
        <Route path="/About" component={About} />
      </Switch>
    </div>
  </Router>
);

export default ToString;
