// import types
import { actionTypes } from './types';
import fetch from 'isomorphic-unfetch';
import { InitState } from "./store";
import { API_PREFIX } from '../services/consts/consts';

// Получение клубов
export const requestGetClubs = (data) => (
  { type: actionTypes.REQUESTED_CLUBS, clubs: data }
);

// Получение игр
export const requestGetGames = (data) => (
  { type: actionTypes.REQUESTED_GAMES, games: data }
);

export const requestClubs = () => (
  { type: actionTypes.REQUEST_CLUBS }
);

export const requestGames = () => (
  { type: actionTypes.REQUEST_GAMES }
);

export const getClubsAC = (
  filterToggleData,
  pagination = 1,
  gameId = '') => (
  async (dispatch) => {
    //console.log('InitState', InitState);
    dispatch(requestClubs());
    // Оставляем в массиве checkedToggle только те тоглы, у которых значение true
    let checkedToggle = [[], []];
    if (filterToggleData) {
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

    const filterData = {
      checkedToggle,
      pagination,
      gameId
    };
    const resp = await fetch(`${API_PREFIX}/club`, {
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


export const getGamesAC = (
  filterToggleData = InitState.gamesFilterToggle,
  pagination = 1,
  clubId = '',
) => (
  async (dispatch) => {
    dispatch(requestGames());
    let checkedToggle = {};

    Object.keys(filterToggleData).forEach(el => {
      checkedToggle[el] = [];
    });

    Object.keys(filterToggleData).forEach(el => {
      Object.keys(filterToggleData[el]).forEach(elInner => {
        if (filterToggleData[el][elInner]) {
          checkedToggle[el].push(elInner)
        }
      });
    });

    const filterData = {
      checkedToggle,
      pagination,
      clubId,
    };

    const resp = await fetch(`${API_PREFIX}/game`, {
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
export const requestFilterToggleGames = (item, category) => (
  { type: actionTypes.REQUEST_FILTER_TOGGLE_GAMES, item, category }
);

export const filterToggleGamesAC = (item, category) => (
  async (dispatch) => {
    dispatch(requestFilterToggleGames(item, category));
  }
);

// Пагинация
export const requestSwitchPaginationValue = (value) => (
  { type: actionTypes.SWITCH_PAGINATION_VALUE, value }
);

export const switchPaginationValueAC = (value, filterToggleData, type) => (
  async (dispatch) => {
    dispatch(requestSwitchPaginationValue(value));
    if (type === 'game') {
      dispatch(getGamesAC(filterToggleData, value));
    }
    if (type === 'club') {
      dispatch(getClubsAC(filterToggleData, value));
    }
  }
);

// Показать карту
export const changeMapAC = () => {
  return {
    type: actionTypes.CHANGE_MAP,
  }
};

// скрыть карту
export const offChangeMapAC = () => {
  return {
    type: actionTypes.OFF_CHANGE_MAP,
  }
};

// Показать мобильный фильтр
export const showFilterToggleAC = () => {
  return {
    type: actionTypes.SHOW_FILTER_TOGGLE,
  }
};

// Двигаем карусель на главной
export const switchCaruselIndexAC = (caruselIndex) => {
  return {
    type: actionTypes.SWITCH_CARUSEL_INDEX,
    caruselIndex,
  }
}

// Меняем screenMode
export const switchScreenModeAC = (screenMode) => {
  return {
    type: actionTypes.SWITCH_SCREEN_MODE,
    screenMode,
  }
};


//********LOGIN-LOGOUT**************
export const requestLogin = (values) => (
  async (dispatch) => {
    dispatch(requestLoginAC());
    console.log('values action', values);
    const resp = await fetch(API_PREFIX + '/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await resp.json();

    dispatch(requestEndLoginAC());
     console.log('!!!!!!!!!!!!!!!!!!!!!', data.loginStatus);
    if (data.loginStatus) dispatch(loginSucsessAC());
    else dispatch(loginRejectAC());
  }
);


export const requestLoginAC = () => {
  return { type: actionTypes.REQUEST_LOGIN }
};
export const requestEndLoginAC = () => {
  return { type: actionTypes.REQUEST_END_LOGIN }
};

export const loginSucsessAC = () => {
  return { type: actionTypes.LOGIN_SUCSESS }
};
export const loginRejectAC = () => {
  return { type: actionTypes.LOGIN_REJECT }
};

//*******************END-LOGIN-LOGOUT********************