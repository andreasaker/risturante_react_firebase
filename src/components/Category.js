import React from "react";
import CourseList from "./CourseList";
import { connect } from "react-redux";
import { setEditCategory, removeCategory } from "../redux/actions";

const Category = ({ category, setEdit, removeCat }) => {
  return (
    <li key={category.id}>
      <strong>{category.name}</strong>
      <button onClick={() => setEdit(category)}>Edit</button>
      <button onClick={() => removeCat(category.id)}>Delete</button>
      <CourseList category={category.id} />
    </li>
  );
};

const mapDispatchtoProps = dispatch => ({
  setEdit: category => dispatch(setEditCategory(category.id, true)),
  removeCat: category_id => dispatch(removeCategory(category_id))
});

export default connect(null, mapDispatchtoProps)(Category);
