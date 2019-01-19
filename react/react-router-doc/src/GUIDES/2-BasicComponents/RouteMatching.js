import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function About(props) {
  console.log(props, "props"); //{history: {...}, location: {...}, match; {...}, staticContext: {...}}
  return <h3>About</h3>;
}

function Contact() {
  return <h3>Contact</h3>;
}

function Always() {
  return <h3>Always</h3>;
}

function RouteMatching() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Route path="/about" component={About} /> {/* renders <About/> */}
        <Route path="/contact" component={Contact} /> {/* renders null */}
        <Route component={Always} /> {/* renders <Always/> */}
      </div>
    </Router>
  );
}
export default RouteMatching;
