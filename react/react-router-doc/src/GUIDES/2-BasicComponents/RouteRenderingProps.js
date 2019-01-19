import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Home() {
  return <h3>Home</h3>;
}

function About(props) {
  const { extra } = props;
  return <h3>About {extra}</h3>;
}

function RouteRenderingProps() {
  return (
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
          <Route path="/home" component={Home} />
          <Route
            path="/about"
            render={props => <About {...props} extra="wangdanting" />}
          />
        </Switch>
      </div>
    </Router>
  );
}
export default RouteRenderingProps;
