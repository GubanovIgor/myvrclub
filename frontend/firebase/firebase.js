import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDh0UNHlRV3ANkqtnmPFNZX9HEAjY3DuyE",
  authDomain: "myvrclub-firebase.firebaseapp.com",
  databaseURL: "https://myvrclub-firebase.firebaseio.com",
  projectId: "myvrclub-firebase",
  storageBucket: "myvrclub-firebase.appspot.com",
  messagingSenderId: "666997419911",
  appId: "1:666997419911:web:aaf4626da71e349a4dad22",
  measurementId: "G-FWDWHE1C5Q"
};

if (!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
auth.useDeviceLanguage();

export { db, auth, firebase }