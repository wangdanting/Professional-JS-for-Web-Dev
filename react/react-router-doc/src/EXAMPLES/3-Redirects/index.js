import React, { PureComponent } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 500);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 500);
  }
};

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <p>
      <h3>Welcome!</h3>
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

function Redirects() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  );
}

export default Redirects;
