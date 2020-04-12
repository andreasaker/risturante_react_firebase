import React from "react";
import { connect } from "react-redux";
import { setEditCourse, removeCourse } from "../redux/actions";

const Course = ({ loggedIn, course, setEdit, handleRemoveCourse }) => {
  return (
    <li key={course.id} className="course">
      <div className="title">
        <strong>{course.title}</strong>
      </div>
      <span className="point_break"></span>
      <div className="price">{course.price}:-</div>
      <div className="content">{course.content}</div>
      {loggedIn && window.location.href !== process.env.REACT_APP_ROOT_URL && (
        <div>
          <button onClick={() => setEdit(course)}>Edit</button>
          <button onClick={() => handleRemoveCourse(course.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  setEdit: (course) => dispatch(setEditCourse(course.id, true)),
  handleRemoveCourse: (course_id) => dispatch(removeCourse(course_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Course);
