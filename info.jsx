//HUC in REACT
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function Component(props) {

  const logging = useSelector(state => state.logging); // переменная logging прилетает из редакса (аналог mapStateToProps)
  const dispatch = useDispatch();

  const [isSubmitionCompleted, isLogin] = useState(false); //инициализация локального стора

  dispatch(requestLogin(values)); //dispatch to action

  if (isLogin === false) { // чтение состояния из локального стора
    isSubmitionCompleted(true) // изменение текущего состояни локального стора (аналон setState({isSubmitionCompleted:true})
  }
}