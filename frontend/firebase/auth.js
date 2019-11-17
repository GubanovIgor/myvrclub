import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// VerifyAuth

export const doVerifyAuth = () =>
  auth.onAuthStateChanged((user => {console.log(user)}))

// VeryfyEmail

export const doSendEmailVerification = () =>
  this.auth.currentUser.sendEmailVerification({
    url: window.location.href,
  });

// Sign out
export const doSignOut = () =>
  auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);