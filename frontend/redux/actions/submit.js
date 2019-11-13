import {actionTypes} from "../types.js";
import {API_PREFIX} from "../../services/consts/consts.js";
import fetch from 'isomorphic-unfetch';

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
// //********LOGIN ADMIN**************
// export const requestLogin = (values) => (
//   async (dispatch) => {
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
// );
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

const requestVerify = () => {
  return {
    type: actionTypes.VERIFY_REQUEST
  };
};

const receiveVerify = user => {
  return {
    type: actionTypes.VERIFY_SUCCESS,
    user
  };
};

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(loginError());
    });
};