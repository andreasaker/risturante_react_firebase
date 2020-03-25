
import {courses,
    categories,
    loggedIn,
    setEditCourse,
    setEditCategory} from "./reducers";

import firebase from 'firebase/app'
import 'firebase/firestore' 
import { createStore, combineReducers } from 'redux'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' 

const fbConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: "risturante.firebaseapp.com",
  databaseURL: "https://risturante.firebaseio.com",
  projectId: "risturante",
  storageBucket: "risturante.appspot.com",
  messagingSenderId: "371988901337",
  appId: process.env.FB_APP_ID
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

firebase.initializeApp(fbConfig)
firebase.firestore()

const rootReducer = combineReducers({
  courses,
  categories,
  loggedIn,
  setEditCourse,
  setEditCategory,
  firestore: firestoreReducer // <- needed if using firestore
})

const initialState = {}
export const store = createStore(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance 
}
