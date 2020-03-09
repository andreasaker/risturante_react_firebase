import React from "react";
import "./styles.css";
import Footer from "./components/Footer";
import AddCoursesForm from "./components/AddCourseForm";
import CategoryList from "./components/CategoryList";
import AddCategoryForm from "./components/AddCategoryForm";
import Authentication from "./components/Authentication";
import { connect } from "react-redux";

const Admin = ({ loggedIn }) => {
  return (
    <div className="App">
      <div className="head_block">
        <h1>Resturante</h1>
        <h2>Start adding food!</h2>
      </div>
      <div className="content_block">
        {loggedIn ? (
          <div>
            <AddCoursesForm />
            <AddCategoryForm />
            <CategoryList />
          </div>
        ) : (
          <Authentication />
        )}
      </div>
      <div className="footer_block">
        <Footer />
      </div>
    </div>
  );
};

const mapStatetoProps = state => ({ loggedIn: state.loggedIn });

export default connect(mapStatetoProps)(Admin);
