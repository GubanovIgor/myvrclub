import { db, auth } from './firebase';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// export const doCreateUser = (id, username, email, role) =>
//   db.ref(`users/${id}`).set({
//     username,
//     email,
//     role
//   });

export const doCreateUser = (id, username, email, role) =>
  firebase.user(id, username, email, role).set({
    username,
    email,
    role
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');