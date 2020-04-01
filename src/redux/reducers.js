export const courses = (state = [], action) => {
  switch (action.type) {
    case "ADD_COURSE":
      console.log(`Course added with name: ${action.course.title}`);
      return state;
    case "EDIT_COURSE":
      console.log(`Course edited with id: ${action.course.id}`);
      return state;
    case "REMOVE_COURSE":
      console.log(`Course removed with id: ${action.id}`);
      return state;
    default:
      return state;
  }
};

export const setEditCourse = (state = { id: "", status: false }, action) => {
  switch (action.type) {
    case "SET_EDIT_COURSE":
      return { id: action.payload.id, status: action.payload.status };
    default:
      return state;
  }
};

export const categories = (state = [], action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      console.log(`Category added with name: ${action.name}`);
      return state;
    case "EDIT_CATEGORY":
      console.log(`Category edited with id: ${action.id} `);
      return state;
    case "REMOVE_CATEGORY":
      console.log(`Category removed with id: ${action.id} `);
      return state;
    default:
      return state;
  }
};

export const setEditCategory = (state = { id: "", status: false }, action) => {
  switch (action.type) {
    case "SET_EDIT_CATEGORY":
      return { id: action.payload.id, status: action.payload.status };
    default:
      return state;
  }
};

export const loggedIn = (state = false, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return !state;
    default:
      return state;
  }
};

/*const reducers = combineReducers({
  courses,
  categories,
  loggedIn,
  setEditCourse,
  setEditCategory
});

export default reducers;
*/
