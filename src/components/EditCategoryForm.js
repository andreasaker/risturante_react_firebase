import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editCategory, setEditCategory } from "../redux/actions";

const EditCategoryForm = ({ editCategory, currentCategory, setEdit }) => {
  const [name, setName] = useState(currentCategory[0].name);
  console.log(...currentCategory);
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
      <p>Add new category</p>
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
  currentCategory: state.categories.filter(
    c => c.id === state.setEditCategory.id
  )
});

const mapDispatchToProps = dispatch => ({
  editCategory: category => dispatch(editCategory(category.id, category)),
  setEdit: status => dispatch(setEditCategory(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategoryForm);
