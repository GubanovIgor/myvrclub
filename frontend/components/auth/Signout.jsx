import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {requestSignOut} from "../../redux/actions/submit.js";

export default function (props) {
  const dispatch = useDispatch();
  const {classes} = props;
  const isLogging = useSelector(state => state.logging); // from redux
  dispatch(requestSignOut());
  return (
    <div>
    </div>)
}