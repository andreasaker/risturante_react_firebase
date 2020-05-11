import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { store, rrfProps } from "./redux/store";
import ErrorBoundary from "./components/ErrorBoundrary";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <Switch>
            <Route path="/admin">
              <ErrorBoundary>
                <Admin />
              </ErrorBoundary>
            </Route>
            <Route path="/">
              <ErrorBoundary>
                <App />
              </ErrorBoundary>
            </Route>
          </Switch>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  rootElement
);
