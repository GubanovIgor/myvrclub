// import types
import { actionTypes } from './types';
import fetch from 'isomorphic-unfetch';
import { InitState } from './store';

// Получение клубов
export const requestGetClubs = (data) => (
  { type: actionTypes.REQUESTED_CLUBS, clubs: data }
);

export const request = () => (
  { type: actionTypes.REQUEST }
);

export const requestGames = () => (
  { type: actionTypes.REQUEST_GAMES }
);

export const getClubsAC = (filterToggleData = InitState.gamesFilterToggle) => (
  async (dispatch) => {
    console.log('InitState', InitState);
    dispatch(request());
    // Оставляем в массиве checkedToggle только те тоглы, у которых значение true
    let checkedToggle = [[], []];
    if(filterToggleData) {
      const keys = Object.keys(filterToggleData);
      for (let i = 0; i < keys.length; i++) {
        const categoryKeys = Object.keys(filterToggleData[keys[i]]);
        categoryKeys.forEach((key) => {
          if (filterToggleData[keys[i]][key]) {
            checkedToggle[i].push(key)
          }
        })
      }
    }

    console.log(checkedToggle)

    const filterData = {
      checkedToggle,
    }

    const resp = await fetch('http://localhost:3100/club', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filterData),
    });
    const data = await resp.json();
    dispatch(requestGetClubs(data));
  }
);

// Получение всех игр при первой загрузке
export const requestGetGames = (data) => (
  { type: actionTypes.REQUESTED_GAMES, games: data }
);

export const getGamesAC = (filterToggleData = InitState.gamesFilterToggle) => (
  async (dispatch) => {

    dispatch(requestGames());
    let checkedToggle = {};

    // if (filterToggleData) {
      Object.keys(filterToggleData).forEach( el => {
        checkedToggle[el] = [];
      });

      Object.keys(filterToggleData).forEach( el => {
        Object.keys(filterToggleData[el]).forEach( elInner => {
          if (filterToggleData[el][elInner]) {
            checkedToggle[el].push(elInner)
          }
        });
      });
    // }
    console.log('InitState', InitState);
    console.log(checkedToggle);
    const filterData = {
      checkedToggle,
    }

    const resp = await fetch('http://localhost:3100/game', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filterData),
    });
    const data = await resp.json();
    dispatch(requestGetGames(data));
  }
);

// Фильтр клубов
export const requestFilterToggleClubs = (item, category) => (
  { type: actionTypes.REQUEST_FILTER_TOGGLE_CLUBS, item, category }
);

export const filterToggleClubsAC = (item, category) => (
  async (dispatch) => {
    dispatch(requestFilterToggleClubs(item, category));
  }
);

// Фильтр игр
export const requestFilterToggleGames= (item, category) => (
  { type: actionTypes.REQUEST_FILTER_TOGGLE_GAMES, item, category }
);

export const filterToggleGamesAC = (item, category) => (
  async (dispatch) => {
    dispatch(requestFilterToggleGames(item, category));
  }
);
