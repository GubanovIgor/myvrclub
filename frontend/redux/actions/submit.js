import {actionTypes} from "../types.js";
import {API_PREFIX} from "../../services/consts/consts.js";
import fetch from 'isomorphic-unfetch';

export const requestLoginAC = () => {
  return {type: actionTypes.REQUEST_LOGIN}
};
export const loginSucsessAC = () => {
  console.log('action loginSucsessAC');
  return {type: actionTypes.LOGIN_SUCSESS}
};
export const loginRejectAC = () => {
  console.log('action loginRejectAC');
  return {type: actionTypes.LOGIN_REJECT}
};

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
    console.log('login status >>>>>>>>>', data.loginStatus);
    if (data.loginStatus) dispatch(loginSucsessAC());
    else dispatch(loginRejectAC());
  }
);


//*******************END-LOGIN ADMIN********************

//********SignUp**************
export const requestSignUp = (values) => (
  async (dispatch) => {
    dispatch(requestLoginAC());
    console.log('values action SignUp>>>>>>>', values);
    try {
      const res = await fetch(API_PREFIX + '/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        const data = await res.json();
        console.log('sucsess signup with username', data)
      } else
        throw new Error(res.statusText);
    } catch (err) {
      console.log('signup with error', err)
    }
  }
);

//*****************SignIn*********************
export const requestSignIn = (values) => (
  async (dispatch) => {
    //dispatch(requestLoginAC());
    console.log('values action SignUp>>>>>>>', values);
    try {
      const res = await fetch(API_PREFIX + '/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        const data = await res.json();
        dispatch(loginSucsessAC(data.user._id));
        localStorage.setItem('userId', data.user._id);
        localStorage.setItem('token', data.token);
        console.log('signup data >>>>>>>>>', data);
      } else
        throw new Error(res.statusText);
    } catch (err) {
      console.log(err);
      dispatch(loginRejectAC());
    }
  }
);

//*****************CheckSession*********************
export const checkSession = () => (
  async (dispatch) => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    console.log('values id>>>>>>>', userId);
    console.log('values token>>>>>>>', token);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      };
      const res = await fetch(`${API_PREFIX}/user/${userId}`, config);
      if (res.ok) {
        const data = await res.json();
        console.log('CheckSession statusData data >>>>>>>>>', data);
        dispatch(loginSucsessAC());
      } else {
        throw new Error(res.statusText);
      }
    } catch (err) {
      console.log(err);
      dispatch(loginRejectAC());
    }
  }
);


//*******************SignOut***********************
export const requestSignOut = () => (
  async (dispatch) => {
    const resp = await fetch(`${API_PREFIX}/auth/signout`);
    const data = await resp.json();
    //dispatch(requestSignOutAC());
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    console.log('SignOut>>>>>>>>>', data);
  }
);