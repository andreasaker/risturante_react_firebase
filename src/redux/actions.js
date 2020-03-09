let courseId = 0;
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

let catId = 0;
export const addCategory = name => ({
  type: "ADD_CATEGORY",
  payload: {
    id: ++catId,
    name
  }
});

export const loggedIn = status => ({
  type: "LOGGED_IN",
  payload: status
});
