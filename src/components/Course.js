import React from "react";
import { connect } from "react-redux";
import { setEditCourse } from "../redux/actions";

const Course = ({ course, setEdit }) => {
  return (
    <li key={course.id}>
      <strong>{course.title}</strong> {course.content} {course.price}:-
      <button onClick={() => setEdit(course)}>Edit</button>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  setEdit: course => dispatch(setEditCourse(course.id, true))
});

export default connect(
  null,
  mapDispatchToProps
)(Course);
