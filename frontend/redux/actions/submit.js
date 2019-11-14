import {actionTypes} from "../types.js";
import {API_PREFIX} from "../../services/consts/consts.js";
import fetch from 'isomorphic-unfetch';
import {auth} from "../../firebase/firebase.js";

// export const requestLoginAC = () => {
//   return {type: actionTypes.REQUEST_LOGIN}
// };
// export const loginSucsessAC = () => {
//   console.log('action loginSucsessAC');
//   return {type: actionTypes.LOGIN_SUCSESS}
// };
// export const loginRejectAC = () => {
//   console.log('action loginRejectAC');
//   return {type: actionTypes.LOGIN_REJECT}
// };
//
//********LOGIN ADMIN**************
// export const requestLogin = (values) => async (dispatch) => {
//     dispatch(requestLoginAC());
//     console.log('values action >>>>>>>', values);
//     const resp = await fetch(API_PREFIX + '/admin/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(values),
//     });
//     const data = await resp.json();
//     console.log('login status >>>>>>>>>', data.loginStatus);
//     if (data.loginStatus) dispatch(loginSucsessAC());
//     else dispatch(loginRejectAC());
//   }
//
//
// //*******************END-LOGIN ADMIN********************

const requestLogin = () => {
  return {
    type: actionTypes.LOGIN_REQUEST
  };
};

const receiveLogin = user => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: actionTypes.LOGIN_FAILURE
  };
};

const requestLogout = () => {
  return {
    type: actionTypes.LOGOUT_REQUEST
  };
};

const receiveLogout = user => {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
    user
  };
};

const logoutError = () => {
  return {
    type: actionTypes.LOGOUT_FAILURE
  };
};

const verifyRequest = () => {
  return {
    type: actionTypes.VERIFY_REQUEST
  };
};

const verifySuccess = user => {
  return {
    type: actionTypes.VERIFY_SUCCESS,
    user
  };
};

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

export const loginUser = (email, password) => (dispatch) => {
  console.log('e,p------->>>>', email, password)
  dispatch(requestLogin());
  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      console.log('user login error - ', error);
      dispatch(loginError());
    });
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  auth
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(error => {
      console.log('user logout error - ', error);
      dispatch(logoutError());
    });
};

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  auth.onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    console.log('verify user --->>>', user)
    dispatch(verifySuccess());
  });
};