import React from "react";
import "./styles.css";
import Footer from "./components/Footer";
import AddCoursesForm from "./components/AddCourseForm";
import CourseList from "./components/CourseList";
import AddCategoryForm from "./components/AddCategoryForm";

export default function Admin() {
  return (
    <div className="App">
      <div className="head_block">
        <h1>Resturante</h1>
        <h2>Start adding food!</h2>
      </div>
      <div className="content_block">
        <AddCoursesForm />
        <AddCategoryForm />
        <CourseList />
      </div>
      <div className="footer_block">
        <Footer />
      </div>
    </div>
  );
}
