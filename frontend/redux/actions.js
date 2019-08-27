// import types
import { actionTypes } from './types';

// Получение клубов
export const requestGetClubs = (data) => (
  { type: actionTypes.REQUESTED_CLUBS, clubs: data }
);

export const getClubsAC = () => (
  async (dispatch) => {
    const resp = await fetch(`http://localhost:3100/club`);
    const data = await resp.json();
    dispatch(requestGetClubs(data));
  }
);

// Получение всех игр при первой загрузке
export const requestGetGames = (data) => (
  { type: actionTypes.REQUESTED_GAMES, games: data }
);

export const getGamesAC = () => (
  async (dispatch) => {
    const resp = await fetch(`http://localhost:3100/game`);
    const data = await resp.json();
    dispatch(requestGetGames(data));
  }
);

// Фильтр клубов
export const requestFilterToggle = (item, category) => (
  { type: actionTypes.REQUEST_FILTER_TOGGLE, item, category }
);

export const filterToggleAC = (item, category) => (
  async (dispatch) => {
    dispatch(requestFilterToggle(item, category));
  }
);

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
    data: num,
  };
};
