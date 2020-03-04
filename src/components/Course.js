import React from "react";

const Course = ({ course }) => {
  return (
    <li key={course.id}>
      <strong>{course.title}</strong> {course.content} {course.price}:-
    </li>
  );
};

export default Course;
