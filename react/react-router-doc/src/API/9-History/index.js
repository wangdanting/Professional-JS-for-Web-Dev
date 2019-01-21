import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Prompt
} from "react-router-dom";

const Go = ({ history }) => {
  console.log(history, "history");
  return <button onClick={() => history.go(-1)}>Go</button>;
};
const Push = ({ history }) => {
  return <button onClick={() => history.push("/")}>Push(/)</button>;
};
const Replace = ({ history }) => {
  return <button onClick={() => history.replace("/")}>Replace(/)</button>;
};
const GoBack = ({ history }) => {
  return <button onClick={() => history.goBack()}>goBack()</button>;
};
const GoForward = ({ history }) => {
  return <button onClick={() => history.goForward()}>goForward()</button>;
};
const Block = ({ history }) => {
  return (
    <button
      onClick={() =>
        history.block(
          <Prompt message={location => `Are you sure you want to go to `} />
        )
      }
    >
      block()
    </button>
  );
};

const History = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Go</Link>
        </li>
        <li>
          <Link to="/push">Push</Link>
        </li>
        <li>
          <Link to="/replace">Replace</Link>
        </li>
        <li>
          <Link to="/goBack">goBack</Link>
        </li>
        <li>
          <Link to="/goForward">goForward</Link>
        </li>
        <li>
          <Link to="/block">block</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Go} />
        <Route path="/push" component={Push} />
        <Route path="/replace" component={Replace} />
        <Route path="/goBack" component={GoBack} />
        <Route path="/goForward" component={GoForward} />
        <Route path="/block" component={Block} />
      </Switch>
    </div>
  </Router>
);

export default History;
