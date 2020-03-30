let courseId = -1;
export const addCourse = course => ({
  type: "ADD_COURSE",
  payload: {
    id: ++courseId,
    course
  }
});

export const editCourse = (course) => { //wrong
  return(dispatch, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('categories').doc(course.id).update({
      ...course,
      updatedAt: new Date()
    }).then(()=>{
      dispatch({type: "EDIT_COURSE", course});
    }).catch((err) => {
      console.log(err)
    })

  }
}
 
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


export const editCategory = (id, name) => {
  return(dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('categories').doc(id).update({
      name: name,
      updatedAt: new Date()
    }).then(()=>{
      dispatch({type: "EDIT_CATEGORY", id, name});
    }).catch((err) => {
      console.log(err)
    })

  }
}

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
