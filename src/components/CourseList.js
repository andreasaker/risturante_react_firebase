import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import Course from "./Course";

const CourseList = ({ courses, category }) => {
  return (
    <ul>
      {isLoaded(courses) &&
        courses.map(c =>
          c.category_id === category.toString() ? (
            <Course key={c.id} course={c} />
          ) : null
        )}
    </ul>
  );
};

const mapStateToProps = state => ({
  courses: state.firestore.ordered.courses
});

export default compose(
  firestoreConnect(() => ["courses"]),
  connect(mapStateToProps)
)(CourseList);
