import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {requestSignOut} from "../../redux/actions/submit.js";

export default function () {
  const dispatch = useDispatch();
  //const isLogging = useSelector(state => state.logging); // from redux
  dispatch(requestSignOut());
  return (
    <div>
      {window.location = '/'}
    </div>)
}