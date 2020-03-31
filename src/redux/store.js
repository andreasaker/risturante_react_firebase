import {
  courses,
  categories,
  loggedIn,
  setEditCourse,
  setEditCategory
} from "./reducers";

import firebase from "firebase/app";
import "firebase/firestore";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance,
  firestoreReducer
} from "redux-firestore";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";

const fbConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: "risturante.firebaseapp.com",
  databaseURL: "https://risturante.firebaseio.com",
  projectId: "risturante",
  storageBucket: "risturante.appspot.com",
  messagingSenderId: "371988901337",
  appId: process.env.FB_APP_ID
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp(fbConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

const rootReducer = combineReducers({
  courses,
  categories,
  loggedIn,
  setEditCourse,
  setEditCategory,
  firestore: firestoreReducer // <- needed if using firestore
});

const middleware = compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  reduxFirestore(firebase, fbConfig),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const initialState = {};
export const store = createStore(rootReducer, initialState, middleware);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
