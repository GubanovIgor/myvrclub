// import types
import { actionTypes } from './types';

// Получение клубов
export const requestGetClubs = (data) => (
  { type: actionTypes.REQUESTED_CLUBS, clubs: data }
);

export const getClubsAC = (filterToggleData) => (
  async (dispatch) => {

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

export const getGamesAC = (filterToggleData) => (
  async (dispatch) => {
    console.log(filterToggleData);
    let category = {};

    if (filterToggleData) {
      Object.keys(filterToggleData).forEach( el => {
        category[el] = [];
      });

      Object.keys(filterToggleData).forEach( el => {
        Object.keys(filterToggleData[el]).forEach( elInner => {
          console.log(filterToggleData[el][elInner]);
          if (filterToggleData[el][elInner]) {
            console.log('im here');
            category[el].push(elInner)
          }
        });
      });
    }

    console.log(category);

    const resp = await fetch(`http://localhost:3100/game`);
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

export const addNumAC = (num) => {
  return {
    type: actionTypes.ADDNUM,
    data: num,
  };
};
