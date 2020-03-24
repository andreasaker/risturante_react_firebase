import React from "react";
import { connect } from "react-redux";
import Category from "./Category";

const CategoryList = ({ categories }) => {
  return (
    <ul className="category_list">
      {categories.map(cat => {
        return <Category key={cat.id} category={cat} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(CategoryList);
