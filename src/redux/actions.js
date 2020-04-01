export const addCourse = course => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    console.log(course);
    firestore
      .collection("courses")
      .add({
        ...course
      })
      .then(() => dispatch({ type: "ADD_COURSE", course }))
      .catch(err => {
        console.log(err);
      });
  };
};

export const editCourse = course => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("courses")
      .doc(course.id)
      .update({
        ...course,
        updatedAt: new Date()
      })
      .then(() => {
        dispatch({ type: "EDIT_COURSE", course });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const setEditCourse = (id, status) => ({
  type: "SET_EDIT_COURSE",
  payload: {
    id: id,
    status: status
  }
});

export const addCategory = name => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("categories")
      .add({
        name: name
      })
      .then(() => dispatch({ type: "ADD_CATEGORY", name }))
      .catch(err => {
        console.log(err);
      });
  };
};

export const editCategory = (id, name) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("categories")
      .doc(id)
      .update({
        name: name,
        updatedAt: new Date()
      })
      .then(() => {
        dispatch({ type: "EDIT_CATEGORY", id, name });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const removeCategory = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("categories")
      .doc(id)
      .delete()
      .then(() => dispatch({ type: "REMOVE_CATEGORY", id }))
      .catch(err => {
        console.log(err);
      });
  };
};

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
