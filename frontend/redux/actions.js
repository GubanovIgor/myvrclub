// ACTIONS
import { actionTypes } from './types';

export const requestGetClubs = (data) => {
  return { type: actionTypes.REQUESTED_CLUBS, clubs: data }
};

export const getClubsAC = () => {
  return async (dispatch) => {
    const resp = await fetch(`http://localhost:3100/club`);
    const data = await resp.json();
    dispatch(requestGetClubs(data))
  }
}

export const requestGetGames = (data) => {
  return { type: actionTypes.REQUESTED_GAMES, games: data }
};

export const getGamesAC = () => {
  return async (dispatch) => {
    const resp = await fetch(`http://localhost:3100/game`);
    const data = await resp.json();
    dispatch(requestGetGames(data))
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

export const addNumAC = (num) => {
  return {
    type: actionTypes.ADDNUM,
    data: num
  }
};