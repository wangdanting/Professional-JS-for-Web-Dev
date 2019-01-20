import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Root = () => <h3>Rooot</h3>;
const Home = () => <h3>Home</h3>;
const About = () => <h3>About</h3>;

const Basename = () => (
  <Router basename="/abc">
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
      <Route path="/abc/home" component={Home} /> {/* no match */}
      <Route path="/home" component={Home} />
      <Route path="/About" component={About} />
    </div>
  </Router>
);

export default Basename;
