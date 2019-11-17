import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {logoutUser} from "../../redux/actions/submit.js";

export default function () {
  const dispatch = useDispatch();
  //const isLogging = useSelector(state => state.isLoggingIn); // from redux
  dispatch(logoutUser());
  window.location = '/';
  return <></>
}