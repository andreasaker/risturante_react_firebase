import React from "react";
import { shallow } from "enzyme";
import Authentication from "./components/Authentication";
import AddCoursesForm from "./components/AddCourseForm";
import EditCoursesForm from "./components/EditCourseForm";
import CategoryList from "./components/CategoryList";
import EditCategoryForm from "./components/EditCategoryForm";
import AddCategoryForm from "./components/AddCategoryForm";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import {
  courses,
  categories,
  loggedIn,
  setEditCourse,
  setEditCategory,
} from "./redux/reducers";

describe("Testing Admin page components", function () {
  const initialState = {};
  const reducers = combineReducers({
    courses,
    categories,
    loggedIn,
    setEditCourse,
    setEditCategory,
  });
  const store = createStore(reducers, initialState);

  it("Renders Authentication without crashing", () => {
    shallow(
      <Provider store={store}>
        <Authentication />
      </Provider>
    );
  });

  it("Renders EditCoursesForm without crashing", () => {
    shallow(
      <Provider store={store}>
        <EditCoursesForm />
      </Provider>
    );
  });

  it("Renders AddCoursesForm without crashing", () => {
    shallow(<AddCoursesForm />);
  });

  it("Renders AddCoursesForm without crashing", () => {
    shallow(<CategoryList />);
  });
  it("Renders AddCoursesForm without crashing", () => {
    shallow(
      <Provider store={store}>
        <EditCategoryForm />
      </Provider>
    );
  });
  it("Renders AddCoursesForm without crashing", () => {
    shallow(
      <Provider store={store}>
        <AddCategoryForm />
      </Provider>
    );
  });

  it("Renders Footer without crashing", () => {
    shallow(<Footer />);
  });
});
