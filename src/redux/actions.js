let courseId = 0;
export const addCourse = course => ({
  type: "ADD_COURSE",
  payload: {
    id: ++courseId,
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
