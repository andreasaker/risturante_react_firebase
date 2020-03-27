import React from "react";
import { connect } from "react-redux";
import { compose } from "redux"
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import Category from "./Category";

const CategoryList = ({ categories }) => {

  if(!isLoaded(categories)){
    return <p>loading</p>
  }

  return (
    <ul className="category_list">
      {categories.map(cat => {
        return <Category key={cat.id} category={cat} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  categories: state.firestore.ordered.categories
});

export default compose(
  firestoreConnect(() => ['categories']),
  connect(mapStateToProps)
)(CategoryList);
