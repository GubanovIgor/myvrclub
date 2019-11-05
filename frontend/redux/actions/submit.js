import {actionTypes} from "../types.js";
import {API_PREFIX} from "../../services/consts/consts.js";
import fetch from 'isomorphic-unfetch';


//********LOGIN ADMIN**************
export const requestLogin = (values) => (
  async (dispatch) => {
    dispatch(requestLoginAC());
    console.log('values action >>>>>>>', values);
    const resp = await fetch(API_PREFIX + '/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await resp.json();
    dispatch(requestEndLoginAC());
    console.log('login status >>>>>>>>>', data.loginStatus);
    if (data.loginStatus) dispatch(loginSucsessAC());
    else dispatch(loginRejectAC());
  }
);

export const requestLoginAC = () => {
  return {type: actionTypes.REQUEST_LOGIN}
};
export const requestEndLoginAC = () => {
  return {type: actionTypes.REQUEST_END_LOGIN}
};
export const loginSucsessAC = () => {
  console.log('action loginSucsessAC');
  return {type: actionTypes.LOGIN_SUCSESS}
};
export const loginRejectAC = () => {
  console.log('action loginRejectAC');
  return {type: actionTypes.LOGIN_REJECT}
};
//*******************END-LOGIN ADMIN********************

//********SignUp**************
export const requestSignUp = (values) => (
  async (dispatch) => {
    //dispatch(requestLoginAC());
    console.log('values action SignUp>>>>>>>', values);
    const resp = await fetch(API_PREFIX + '/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await resp.json();
    //dispatch(requestEndLoginAC());
    console.log('login status >>>>>>>>>', data.loginStatus);
    console.log('signup data >>>>>>>>>', data);
    // if (data.loginStatus) dispatch(loginSucsessAC());
    // else dispatch(loginRejectAC());
  }
);

//*****************SignIn*********************
export const requestSignIn = (values) => (
  async (dispatch) => {
    //dispatch(requestLoginAC());
    console.log('values action SignUp>>>>>>>', values);
    const resp = await fetch(API_PREFIX + '/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await resp.json();
    //dispatch(requestEndLoginAC());
    console.log('login status >>>>>>>>>', data.loginStatus);
    console.log('signup data >>>>>>>>>', data);
    if (data.user) {
      dispatch(loginSucsessAC(data.user._id));
      sessionStorage.setItem('userId', data.user._id);
      sessionStorage.setItem('token', data.token);
    }
    else dispatch(loginRejectAC());
  }
);

//*****************CheckSession*********************
export const checkSession = (values) => (
  async (dispatch) => {
    //dispatch(requestLoginAC());
    const userId = sessionStorage.getItem('userId')
    const token = sessionStorage.getItem('token')
    console.log('values id>>>>>>>', userId);
    console.log('values token>>>>>>>', token);
    const resp = await fetch(`${API_PREFIX}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await resp.json();
    //dispatch(requestEndLoginAC());
    console.log('statusData data >>>>>>>>>', data);

  }
);
//*******************SignOut***********************
export const signOut = () => (
  async (dispatch) => {
    const resp = await fetch(`${API_PREFIX}/auth/signout`);
    const data = await resp.json();
    //dispatch(requestEndLoginAC());
    console.log('statusData >>>>>>>>>', data);

  }
);