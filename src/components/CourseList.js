import React from "react";
import { connect } from "react-redux";
import Course from "./Course";

const CourseList = ({ courses, category }) => {
  return (
    <ul>
      {courses.map(c => c.category_id === category.toString() ? <Course key={c.id} course={c} /> : null )}
    </ul>
  );
};

const mapStateToProps = state => ({
  courses: state.courses
});

export default connect(mapStateToProps)(CourseList);
