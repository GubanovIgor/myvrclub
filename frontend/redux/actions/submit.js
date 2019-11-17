import {actionTypes} from "../types.js";
import {API_PREFIX} from "../../services/consts/consts.js";
import fetch from 'isomorphic-unfetch';
import {auth} from "../../firebase/firebase.js";
import Router from "next/router.js";

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
  if(user.emailVerified){
    return {
      type: actionTypes.LOGIN_SUCCESS,
      user
    }
  }else{
    return {
      type: actionTypes.LOGIN_SUCCESS_NOT_EMAIL_VERIFYED,
      user
    }
  }
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

const logoutError = (err) => {
  return {
    type: actionTypes.LOGOUT_FAILURE,
    payload: err
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
  const role = 0;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      //db.doCreateUser(authUser.user.uid, 'vasya', email, role);
      //db.doUser(aauthUser.user.uid, 'vasya', email, role);
      console.log('current user---->>', authUser);
      //dispatch(receiveSignup(user));
    })
    .then(() => {
      auth.languageCode = 'ru';
      auth.currentUser.sendEmailVerification();
      alert('A link was sent to ' + email + '. Please use the link in the email to veryfy profile.');
      Router.push('/')
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
      console.log('user login error - ', error.message);
      dispatch(loginError(error.message));
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
  auth
    .onAuthStateChanged(user => {
      if (user !== null) {
        console.log('user verification --->>> ', user);
        dispatch(receiveLogin(user));
      } else {
        dispatch(loginError('Not Authorization'));
      }
      dispatch(verifySuccess());
    });
};