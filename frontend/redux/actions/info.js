import {auth} from "../../firebase/firebase.js";

export const signupUser = (email, password) => (dispatch) => {
  //dispatch(requestSignup());
  auth
    .sendSignInLinkToEmail(email, {
      'url': `${window.location.href}`, // Here we redirect back to this same page.
      'handleCodeInApp': true // This must be true.
    })
    .then(() => {
      localStorage.setItem('emailForSignIn', email);
      alert('An email was sent to ' + email + '. Please use the link in the email to sign-in.');
      //dispatch(receiveSignup(user));
    })
    .catch(error => {
      console.log('user signup error - ', error);
      //dispatch(signupError());
    });
}; //TODO что делать с ответом от firbase непонятно