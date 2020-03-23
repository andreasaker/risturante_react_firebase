let courseId = -1;
export const addCourse = course => ({
  type: "ADD_COURSE",
  payload: {
    id: ++courseId,
    course
  }
});

export const editCourse = (id, course) => ({
  type: "EDIT_COURSE",
  payload: {
    id,
    course
  }
});

export const setEditCourse = (id, status) => ({
  type: "SET_EDIT_COURSE",
  payload: {
    id: id,
    status: status
  }
});

let catId = -1;
export const addCategory = name => ({
  type: "ADD_CATEGORY",
  payload: {
    id: ++catId,
    name
  }
});

export const editCategory = (id, name) => ({
  type: "EDIT_CATEGORY",
  payload: {
    id: id,
    name: name
  }
});

export const setEditCategory = (id, status) => ({
  type: "SET_EDIT_CATEGORY",
  payload: {
    id: id,
    status: status
  }
});

export const loggedIn = status => ({
  type: "LOGGED_IN",
  payload: status
});
