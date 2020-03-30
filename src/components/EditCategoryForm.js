import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { editCategory, setEditCategory } from "../redux/actions";

const EditCategoryForm = ({ editCategory, currentCategory, setEdit }) => {
  const [name, setName] = useState(currentCategory[0].name);
  const handleChange = e => {
    const newName = e.target.value;
    setName(newName);
  };

  const handleSubmit = e => {
    e.preventDefault();
    editCategory({ id: currentCategory[0].id, name: name });
    setName("");
    setEdit({ id: "", status: false });
  };

  const handleQuitEdit = e => {
    e.preventDefault();
    setName("");
    setEdit({ id: "", status: false });
  };

  useEffect(() => {
    setName(currentCategory[0].name);
  },[currentCategory]);


  return (
    <form>
      <p>Edit category</p>
      <input
        type="text"
        name="name"
        placeholder="Category name"
        onChange={e => handleChange(e)}
        value={name}
      />
      <button className="ok-btn" onClick={e => handleSubmit(e)}>
        Edit
      </button>
      <button className="second-btn" onClick={e => handleQuitEdit(e)}>
        Close edit
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  currentCategory: state.firestore.ordered.categories.filter(
    c => c.id === state.setEditCategory.id
  )
});

const mapDispatchToProps = dispatch => ({
  editCategory: category => dispatch(editCategory(category.id, category.name)),
  setEdit: status => dispatch(setEditCategory(status))
});

export default compose(
  firestoreConnect(() => ['categories']),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditCategoryForm);
