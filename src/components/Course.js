import React from "react";
import { connect } from "react-redux";
import { setEditCourse, removeCourse } from "../redux/actions";

const Course = ({ loggedIn, course, setEdit, handleRemoveCourse }) => {
  return (
    <li key={course.id}>
      <strong>{course.title}</strong> {course.content} {course.price}:-
      {loggedIn && window.location.href !== process.env.REACT_APP_ROOT_URL && (
        <div>
          <button onClick={() => setEdit(course)}>Edit</button>
          <button onClick={() => handleRemoveCourse(course.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

const mapDispatchToProps = dispatch => ({
  setEdit: course => dispatch(setEditCourse(course.id, true)),
  handleRemoveCourse: course_id => dispatch(removeCourse(course_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Course);
