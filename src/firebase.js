import firebase from "firebase/app";
// import * as firebase from "firebase/app";
// import { Firebase } from "firebase/compat/app";
import "firebase/database";
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

let config = {
  //   apiKey: "xxx",
  //   authDomain: "bezkoder-firebase.firebaseapp.com",
  //   databaseURL: "https://bezkoder-firebase.firebaseio.com",
  //   projectId: "bezkoder-firebase",
  //   storageBucket: "bezkoder-firebase.appspot.com",
  //   messagingSenderId: "xxx",
  //   appId: "xxx",

  apiKey: "AIzaSyCPyH6NIC0LDREuoOrnHBMR00PhMm_obm4",
  authDomain: "tutorials-mockup.firebaseapp.com",
  projectId: "tutorials-mockup",
  storageBucket: "tutorials-mockup.appspot.com",
  messagingSenderId: "414062454540",
  appId: "1:414062454540:web:e3cf822ce33fc2fb26cb29",
  measurementId: "G-X7PXSHQ185",
  databaseURL:
    "https://tutorials-mockup-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

firebase.initializeApp(config);

export default firebase.database();
