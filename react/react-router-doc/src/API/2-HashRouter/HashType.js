import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

const Root = () => <h3>Rooot</h3>;
const Home = () => <h3>Home</h3>;
const About = () => <h3>About</h3>;

const HashType = () => (
  // "slash" - Creates hashes like #/ and #/sunshine/lollipops default
  // "noslash" - Creates hashes like # and #sunshine/lollipops
  // "hashbang" - Creates “ajax crawlable” (deprecated by Google) hashes like #!/ and #!/sunshine/lollipops

  <Router hashType="hashbang">
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

export default HashType;
