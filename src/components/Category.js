import React from "react";
import CourseList from "./CourseList";
import { connect } from "react-redux";
import { setEditCategory } from "../redux/actions";

const Category = ({ category, setEdit }) => {
  console.log(category)
  return (
    <li key={category.id}>
      <strong>{category.name}</strong>
      <button onClick={() => setEdit(category)}>Edit</button>
      <CourseList category={category.id} />
    </li>
  );
};

const mapDispatchtoProps = dispatch => ({
  setEdit: category => dispatch(setEditCategory(category.id, true))
});

export default connect(
  null,
  mapDispatchtoProps
)(Category);
