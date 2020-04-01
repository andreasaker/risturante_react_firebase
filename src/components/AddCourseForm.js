import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { addCourse } from "../redux/actions";

const AddCourseForm = ({ categories, createCourse }) => {
  const initCourse = {
    title: "",
    content: "",
    price: "",
    category_id: ""
  };
  const [course, setCourse] = useState(initCourse);

  const handleChange = e => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createCourse(course);
    setCourse(initCourse);
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={e => handleChange(e)}
        value={course.title}
      />
      <input
        type="text"
        name="content"
        placeholder="Content"
        onChange={e => handleChange(e)}
        value={course.content}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={e => handleChange(e)}
        value={course.price}
      />

      <select name="category_id" onChange={e => handleChange(e)}>
        <option>-- Choose category --</option>
        {isLoaded(categories) &&
          categories.map(c => {
            return (
              <option key={c.id} value={`${c.id}`}>
                {c.name}
              </option>
            );
          })}
      </select>
      <button name="add todo" onClick={e => handleSubmit(e)}>
        Add
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  categories: state.firestore.ordered.categories
});

const mapDispatchToProps = dispatch => ({
  createCourse: course => dispatch(addCourse(course))
});

export default compose(
  firestoreConnect(() => ["categories"]),
  connect(mapStateToProps, mapDispatchToProps)
)(AddCourseForm);
