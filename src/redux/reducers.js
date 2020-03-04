import { combineReducers } from "redux";

const courses = (state = [], action) => {
  switch (action.type) {
    case "ADD_COURSE":
      const { id, course } = action.payload;
      return [...state, { ...course, id: id }]; //Object i objekt
    default:
      return state;
  }
};

const categories = (state = [], action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      const { id, name } = action.payload;
      return [...state, { name, id }];
    default:
      return state;
  }
};

const reducers = combineReducers({
  courses,
  categories
});

export default reducers;
