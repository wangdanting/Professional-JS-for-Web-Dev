import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import Page1 from "./1-Page1";
import Page2 from "./2-Page2";
import NoContent from "./no-content";
import Login from "./4-Login";
import "./App.css";

const Header = (
  <nav>
    <ul>
      <li>
        <Link to="/">Page1</Link>
      </li>
      <li>
        <NavLink to="/page2" activeClassName="hurray">
          Page2
        </NavLink>
        {/*<a href="/page2">Page2</a>  */}
        {/* 被激活时变成 <a href="/page2" class="hurray" aria-current="page">Page2</a>  */}
      </li>
      <li>
        <Link to="/page3">Page3</Link>
      </li>
    </ul>
  </nav>
);

const Page3 = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;

const Page3Parent = ({ match }) => {
  console.log(match, "match"); //{isExact: true, params: {}, path: "/page3", url: "/page3"}
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Route path={`${match.path}/:id`} component={Page3} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          {Header}
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Page1} />
            <Route
              path="/page2"
              render={props => <Page2 {...props} extra={"abc"} />}
            />
            <Route path="/page3" component={Page3Parent} />
            <Route component={NoContent} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
