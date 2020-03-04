import React from "react";
import CourseList from "./CourseList";

const Category = ({ category, courses }) => {
  return (
    <li key={category.id}>
      <strong>{category.name}</strong>
      <CourseList category={category.id} />
    </li>
  );
};

export default Category;
