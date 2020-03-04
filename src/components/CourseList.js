import React, { useState } from "react";
import { connect } from "react-redux";
import Course from "./Course";

const CourseList = ({ courses, category }) => {
  const filterCourses = () => {
    setCoursesFilter(courses.filter(c => c.category_id == category));
  };

  return (
    <ul>
      {courses.map(c => {
        if (c.category_id == category) {
          return <Course key={c.id} course={c} />;
        }
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  courses: state.courses
});

export default connect(mapStateToProps)(CourseList);
