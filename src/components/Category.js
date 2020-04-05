import React from "react";
import CourseList from "./CourseList";
import { connect } from "react-redux";
import { setEditCategory, removeCategory } from "../redux/actions";

const Category = ({ category, setEdit, removeCat, loggedIn }) => {
  return (
    <li key={category.id}>
      <h3>{category.name}</h3>
      {loggedIn && window.location.href !== process.env.REACT_APP_ROOT_URL && (
        <div>
          <button onClick={() => setEdit(category)}>Edit</button>
          <button onClick={() => removeCat(category.id)}>Delete</button>
        </div>
      )}
      <CourseList category={category.id} />
    </li>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

const mapDispatchtoProps = dispatch => ({
  setEdit: category => dispatch(setEditCategory(category.id, true)),
  removeCat: category_id => dispatch(removeCategory(category_id))
});

export default connect(mapStateToProps, mapDispatchtoProps)(Category);
