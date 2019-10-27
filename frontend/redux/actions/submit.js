import {actionTypes} from "../types.js";
import {API_PREFIX} from "../../services/consts/consts.js";
import fetch from 'isomorphic-unfetch';


//********LOGIN-LOGOUT**************
export const requestLogin = (values) => (
  async (dispatch) => {
    dispatch(requestLoginAC());
    console.log('values action', values);
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
  return { type: actionTypes.REQUEST_LOGIN }
};
export const requestEndLoginAC = () => {
  return { type: actionTypes.REQUEST_END_LOGIN }
};
export const loginSucsessAC = () => {
  console.log('action loginSucsessAC');
  return { type: actionTypes.LOGIN_SUCSESS }
};
export const loginRejectAC = () => {
  console.log('action loginRejectAC');
  return { type: actionTypes.LOGIN_REJECT }
};
//*******************END-LOGIN-LOGOUT********************