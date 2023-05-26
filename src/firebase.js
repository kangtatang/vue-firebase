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
};

firebase.initializeApp(config);

export default firebase.database();
