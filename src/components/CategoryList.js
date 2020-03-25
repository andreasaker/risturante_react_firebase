import React from "react";
import { useSelector, connect } from "react-redux";
import Category from "./Category";
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'


const CategoryList = ({ categories }) => {

  useFirestoreConnect([
    { collection: 'categories' }
  ])
  const cate = useSelector(state => state.firestore.ordered.categories)
  console.log(cate)

  if(!isLoaded(cate)){
    return <p>loading</p>
  }

  return (
    <ul className="category_list">
      {cate.map(cat => {
        return <Category key={cat.id} category={cat} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(CategoryList);
