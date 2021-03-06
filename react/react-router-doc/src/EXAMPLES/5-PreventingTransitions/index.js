import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";

function PreventingTransitions() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Form</Link>
          </li>
          <li>
            <Link to="/one">One</Link>
          </li>
          <li>
            <Link to="/two">Two</Link>
          </li>
        </ul>
        <Route path="/" exact component={Form} />
        <Route path="/one" render={() => <h3>One</h3>} />
        <Route path="/two" render={() => <h3>Two</h3>} />
      </div>
    </Router>
  );
}

class Form extends PureComponent {
  state = {
    isBlocking: false
  };

  submit = e => {
    e.preventDefault();
    e.target.reset();
    this.setState({
      isBlocking: false
    });
  };

  handleChange = e => {
    this.setState({
      isBlocking: e.target.value.length > 0
    });
  };

  render() {
    const { isBlocking } = this.state;
    return (
      <form onSubmit={this.submit}>
        <Prompt
          when={isBlocking}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
        <p>
          Blocking?{" "}
          {isBlocking ? "yes, click a link or the back button" : "nope"}
        </p>
        <p>
          <input
            size="50"
            placeholder="type something to block transitions"
            onChange={this.handleChange}
          />
        </p>
        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    );
  }
}

export default PreventingTransitions;
