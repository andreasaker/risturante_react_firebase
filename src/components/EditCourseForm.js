import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editCourse, setEditCourse } from "../redux/actions";

const EditCourseForm = ({ categories, editCourse, currentCourse, setEdit }) => {
  const initCourse = {
    title: "",
    content: "",
    price: "",
    category_id: ""
  };

  const [course, setCourse] = useState(...currentCourse);

  const handleChange = e => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    editCourse(course);
    setEdit(false);
    setCourse(initCourse);
  };

  const handleQuitEdit = e => {
    e.preventDefault();
    setCourse(initCourse);
    setEdit(false);
  };

  useEffect(() => {
    setCourse(...currentCourse);
  }),
    [currentCourse];

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
      <select
        name="category_id"
        onChange={e => handleChange(e)}
        value={course.category_id}
      >
        <option>-- Choose category --</option>
        {categories.map(c => {
          return (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          );
        })}
      </select>
      <button className="ok-btn" name="edittodo" onClick={e => handleSubmit(e)}>
        Edit
      </button>
      <button className="second-btn" onClick={e => handleQuitEdit(e)}>
        Close edit
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  categories: state.categories,
  currentCourse: state.courses.filter(c => c.id === state.setEditCourse.id)
});

const mapDispatchToProps = dispatch => ({
  editCourse: course => dispatch(editCourse(course.id, course)),
  setEdit: status => dispatch(setEditCourse(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCourseForm);
