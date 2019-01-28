import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./Example/reducers";
import routes from "./routerConfig";
import "./App.css";
import { getAllProducts } from "./Example/actions/shoppingCart";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

store.dispatch(getAllProducts());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div style={{ display: "flex" }}>
            <div
              style={{
                padding: "10px",
                width: "100px",
                height: "100%",
                position: "fixed",
                background: "#f0f0f0"
              }}
            >
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {routes.map(route => (
                  <li key={route.path}>
                    <Link to={route.path}>{route.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: 1, padding: "10px", marginLeft: "110px" }}>
              {routes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
