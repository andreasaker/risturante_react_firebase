import { combineReducers } from "redux";

const courses = (state = [], action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return [...state, { ...action.payload.course, id: action.payload.id }];
    case "EDIT_COURSE":
      console.log(action.payload.course);
      const newstate = state.map(s =>
        s.id === action.payload.id
          ? (s.course = action.payload.course)
          : s.course
      );
      return newstate;
    default:
      return state;
  }
};

const setEditCourse = (state = { id: "", status: false }, action) => {
  switch (action.type) {
    case "SET_EDIT_COURSE":
      return { id: action.payload.id, status: action.payload.status };
    default:
      return state;
  }
};

const categories = (state = [], action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      const { id, name } = action.payload;
      return [...state, { name, id }];
    case "EDIT_CATEGORY":
      console.log(action);
      const newstate = state.map(s =>
        s.id === action.payload.id ? (s.name = action.payload.name) : s
      );
      return newstate;
    default:
      return state;
  }
};

const setEditCategory = (state = { id: "", status: false }, action) => {
  switch (action.type) {
    case "SET_EDIT_CATEGORY":
      return { id: action.payload.id, status: action.payload.status };
    default:
      return state;
  }
};

const loggedIn = (state = false, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return !state;
    default:
      return state;
  }
};

const reducers = combineReducers({
  courses,
  categories,
  loggedIn,
  setEditCourse,
  setEditCategory
});

export default reducers;
