import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}

function Tacos({ children }) {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>

      {children}
    </div>
  );
}

const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => {
      let child = null;
      if (route.routes) {
        child = route.routes.map(item => (
          <RouteWithSubRoutes key={item.path} {...item} />
        ));
      }
      return (
        <route.component {...props} routes={route.routes}>
          <Switch>{child}</Switch>
        </route.component>
      );
    }}
  />
);

function RouteConfig() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
        </ul>

        <Switch>
          {routes.map(route => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default RouteConfig;
