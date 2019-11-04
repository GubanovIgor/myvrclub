//HUC in REACT
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
//
// export default function Component(props) {
//
//   const logging = useSelector(state => state.logging); // переменная logging прилетает из редакса (аналог mapStateToProps)
//   const dispatch = useDispatch();
//
//   const [isSubmitionCompleted, isLogin] = useState(false); //инициализация локального стора
//
//   dispatch(requestLogin(values)); //dispatch to action
//
//   if (isLogin === false) { // чтение состояния из локального стора
//     isSubmitionCompleted(true) // изменение текущего состояни локального стора (аналон setState({isSubmitionCompleted:true})
//   }
// }


//********* DETECT DEVICE***************

// Index.getInitialProps = ({ req }) => {
//   let userAgent;
//   if (req) {
//     userAgent = req.headers["user-agent"];
//   } else {
//     userAgent = navigator.userAgent;
//   }
//   const parser = new UAParser();
//   parser.setUA(userAgent);
//   const result = parser.getResult();
//   const deviceType = (result.device && result.device.type) || "desktop";
//   return { deviceType };
// };

// static getInitialProps({ req }) {
//   let userAgent;
//   let deviceType;
//   if (req) {
//     userAgent = req.headers["user-agent"];
//   } else {
//     userAgent = navigator.userAgent;
//   }
//   const md = new MobileDetect(userAgent);
//   if (md.tablet()) {
//     deviceType = "tablet";
//   } else if (md.mobile()) {
//     deviceType = "mobile";
//   } else {
//     deviceType = "desktop";
//   }
//   return { deviceType };
// }