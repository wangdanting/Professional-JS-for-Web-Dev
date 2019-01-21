import React from "react";
import { MemoryRouter as Router, Route, Link, Switch } from "react-router-dom";
//一个<Router>在内存让你的“URL”的历史记录（不读取或写入到地址栏

const Root = () => <h3>Rooot</h3>;
const Home = props => {
  console.log(props, "props");
  return <h3>Home</h3>;
};
const About = () => <h3>About</h3>;

const MemoryRouter = () => (
  <Router>
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
      <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/home" component={Home} />
        <Route path="/About" component={About} />
      </Switch>
    </div>
  </Router>
);

export default MemoryRouter;
