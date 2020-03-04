import React, { useState } from "react";
import { connect } from "react-redux";
import { addCategory } from "../redux/actions";

const AddCategoryForm = ({ addCategory }) => {
  const [name, setName] = useState("");

  const handleChange = e => {
    const newName = e.target.value;
    setName(newName);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addCategory(name);
    setName("");
  };

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
      <button onClick={e => handleSubmit(e)}>Add</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addCategory: category => dispatch(addCategory(category))
});

export default connect(
  null,
  mapDispatchToProps
)(AddCategoryForm);
