import React from "react";
import App from "./App";
import Admin from "./Admin";
import { shallow } from "enzyme";
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
  const storesss = combineReducers({
    courses,
    categories,
    loggedIn,
    setEditCourse,
    setEditCategory,
  });

  const store = createStore(storesss, initialState);

  it("Renders App component without crashing", () => {
    shallow(<App />);
  });

  it("Renders Admin component without crashing", () => {
    shallow(
      <Provider store={store}>
        <Admin />
      </Provider>
    );
  });
});
