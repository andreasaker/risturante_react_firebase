import React from "react";
import { connect } from "react-redux";
import Category from "./Category";

const CategoryList = ({ categories, courses }) => {
  return (
    <ul className="category_list">
      {categories.map(cat => {
        return <Category key={cat.id} category={cat} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  categories: state.categories,
  courses: state.courses
});

export default connect(mapStateToProps)(CategoryList);
