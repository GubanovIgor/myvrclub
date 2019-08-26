// ACTIONS
import { actionTypes } from './types';

export const requestGetClubs = (data) => {
  return { type: actionTypes.REQUESTED_CLUBS, clubs: data }
};


export const getClubsAC = () => {
  return async (dispatch) => {
    const resp = await fetch(`http://localhost:3100/club`);
    const data = await resp.json();
    console.log(data);
    dispatch(requestGetClubs(data))
  }
}

// export const serverRenderClock = isServer => dispatch => {
//   return dispatch({
//     type: actionTypes.TICK,
//     light: !isServer,
//     ts: Date.now()
//   })
// }
//
// export const startClock = (dispatch) => {
//   return setInterval(() => {
//     dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
//   }, 1000)
// };
//
// export const incrementCount = () => {
//   return { type: actionTypes.INCREMENT }
// };
//
// export const decrementCount = () => {
//   return { type: actionTypes.DECREMENT }
// };
//
// export const resetCount = () => {
//   return { type: actionTypes.RESET }
// };


export const addNumAC = (num) => {
  return {
    type: actionTypes.ADDNUM,
    data: num
  }
};