import React from "react";
import App from "./App";
import Admin from "./Admin";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import {
  courses,
  categories,
  loggedIn,
  setEditCourse,
  setEditCategory,
} from "./redux/reducers";

describe("Testing index page components", function () {
  const initialState = {};
  const reducers = combineReducers({
    courses,
    categories,
    loggedIn,
    setEditCourse,
    setEditCategory,
  });

  const store = createStore(reducers, initialState);

  it("Renders App component without crashing", () => {
    mount(
      <Router>
        <App />
      </Router>
    );
  });

  it("Renders Admin component without crashing", () => {
    mount(
      <Provider store={store}>
        <Router>
          <Admin />
        </Router>
      </Provider>
    );
  });
});
