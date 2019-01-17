import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Child({ match }) {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}

function ComponentWithRegex({ match }) {
  return (
    <div>
      <h3>Only asc/desc are allowed: {match.params.direction}</h3>
    </div>
  );
}

function URLParameters() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/order/asc">Modus Create</Link>
          </li>
          <li>
            <Link to="/order/foo">not match</Link>
          </li>
        </ul>

        <Route exact path="/:id" component={Child} />
        <Route
          path="/order/:direction(asc|desc)"
          component={ComponentWithRegex}
        />
      </div>
    </Router>
  );
}

export default URLParameters;
