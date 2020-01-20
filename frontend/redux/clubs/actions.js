// import types
import fetch from 'isomorphic-unfetch';
import { API_PREFIX } from '../../services/consts/consts';
import { actionTypes } from "../types.js";
import checkedToggleServices from '../../services/checkedToggle.js'

// Получение клубов
export const requestGetClubs = (data) => (
  { type: actionTypes.REQUESTED_CLUBS, clubs: data }
);

export const requestGetClubsForMap = (data) => (
  { type: actionTypes.REQUESTED_CLUBS_FOR_MAP, clubs: data }
);

export const requestGetClub = (data) => (
  { type: actionTypes.REQUESTED_CLUB, club: data }
);

export const requestClubs = () => (
  { type: actionTypes.REQUEST_CLUBS }
);

export const getAllClubsAC = (name) => (
  async (dispatch) => {
    dispatch(requestClubs());
    const resp = await fetch(`${API_PREFIX}/club?name=${name}`);
    const clubs = await resp.json();
    dispatch(requestGetClubs(clubs));
  }
);

export const getClubAC = (name) => (
  async (dispatch) => {
    dispatch(requestClubs());
    const resp = await fetch(`${API_PREFIX}/club/url/?name=${name}`);
    const club = await resp.json();
    dispatch(requestGetClub(club));
  }
);

export const getClubsAC = (
  filterToggleData,
  pagination = 1,
  gameId = '',
  searchName = ''
) => (
    async (dispatch) => {
      //console.log('InitState', InitState);
      dispatch(requestClubs());
      const checkedToggle = checkedToggleServices(filterToggleData);
      const filterData = {
        checkedToggle,
        pagination,
        gameId,
        searchName
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

// Получение всех клубов для карты
export const getClubsForMapAC = (
  filterToggleData,
  gameId = '') => (
    async (dispatch) => {
      console.log('qweqwe')
      //console.log('InitState', InitState);
      // dispatch(requestClubs());
      const checkedToggle = checkedToggleServices(filterToggleData);
      const filterData = {
        checkedToggle,
        gameId,
      };
      const resp = await fetch(`${API_PREFIX}/club`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filterData),
      });
      const data = await resp.json();
      dispatch(requestGetClubsForMap(data));
    }
  );

// Получение одного клуба для карты
export const getClubForMapAC = (clubId) => (
  async (dispatch) => {
    const filterData = {
      clubId,
    };

    const resp = await fetch(`${API_PREFIX}/club/1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filterData),
    });

    const data = await resp.json();
    console.log(data, '->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    dispatch(requestGetClubsForMap(data));
  }
);