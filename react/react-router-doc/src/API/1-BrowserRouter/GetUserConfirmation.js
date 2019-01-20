import React from "react";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";

const Root = () => <h3>Rooot</h3>;
const Home = () => {
  return <Prompt message={location => `Are you sure you want to go to`} />;
};
const About = () => <h3>About</h3>;

const getConfirmation = (message, callback) => {
  console.log("message");
  const allowTransition = window.confirm(message);
  callback(allowTransition);
};

const GetUserConfirmation = () => (
  <Router getUserConfirmation={getConfirmation}>
    <div>
      <ul>
        <li>
          <Link to="/">root</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route exact path="/" component={Root} />
      <Route path="/home" component={Home} />
      <Route path="/About" component={About} />
    </div>
  </Router>
);

export default GetUserConfirmation;
