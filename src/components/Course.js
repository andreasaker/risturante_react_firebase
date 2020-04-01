import React from "react";
import { connect } from "react-redux";
import { setEditCourse, removeCourse } from "../redux/actions";

const Course = ({ course, setEdit, handleRemoveCourse }) => {
  return (
    <li key={course.id}>
      <strong>{course.title}</strong> {course.content} {course.price}:-
      <button onClick={() => setEdit(course)}>Edit</button>
      <button onClick={() => handleRemoveCourse(course.id)}>Delete</button>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  setEdit: course => dispatch(setEditCourse(course.id, true)),
  handleRemoveCourse: course_id => dispatch(removeCourse(course_id))
});

export default connect(null, mapDispatchToProps)(Course);
