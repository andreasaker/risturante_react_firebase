import React from "react";
import { connect } from "react-redux";
import Course from "./Course";

const CourseList = ({ courses }) => {
  return (
    <ul>
      {courses.map(c => {
        return <Course key={c.id} course={c} />;
      })}
    </ul>
  );
};

const mapPropsToState = state => ({
  courses: state.courses
});

export default connect(mapPropsToState)(CourseList);
