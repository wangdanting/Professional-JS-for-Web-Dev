import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class ScrollToTopOnMount extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div style={{ background: "red", height: "2000px" }}>
        <ScrollToTopOnMount />
        <h1>Here is my long content page Home</h1>
      </div>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <div style={{ background: "yellow", height: "2000px" }}>
        <ScrollToTopOnMount />
        <h1>Here is my long content page About</h1>
      </div>
    );
  }
}

const ScrollToTop = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <ul style={{ width: "100px", position: "fixed", height: "100%" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div style={{ flex: 1, marginLeft: "100px" }}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </div>
  </Router>
);
export default ScrollToTop;
