import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function OldSchoolMenuLink({ label, to, exact }) {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        return (
          <div className={match ? "active" : ""}>
            {match ? "> " : ""}
            <Link to={to}>{label}</Link>
          </div>
        );
      }}
    />
  );
}

function CustomLink() {
  return (
    <Router>
      <div>
        <OldSchoolMenuLink exact={true} to="/" label="Home" />
        <OldSchoolMenuLink exact={true} to="/about" label="About" />
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}
export default CustomLink;
