// import types
import fetch from 'isomorphic-unfetch';
import { API_PREFIX } from '../../services/consts/consts';
import {actionTypes} from "../types.js";
import {InitState} from "../store.js";


export const requestGetGames = (data) => (
  { type: actionTypes.REQUESTED_GAMES, games: data }
);

export const requestGetGame = (data) => (
  { type: actionTypes.REQUESTED_GAME, game: data }
);

export const requestGames = () => (
  { type: actionTypes.REQUEST_GAMES }
);

export const getAllGamesAC = (name) => (
  async (dispatch) => {
    console.log('name----', name);
    dispatch(requestGames());
    const resp = await fetch(`${API_PREFIX}/game?name=${name}`);
    const games = await resp.json();
    dispatch(requestGetGames(games));
  }
);

export const getGameAC = (name) => (
  async (dispatch) => {
    dispatch(requestGames());
    const resp = await fetch(`${API_PREFIX}/game/url/?name=${name}`);
    const game = await resp.json();
    dispatch(requestGetGame(game));
  }
);

export const getGamesAC = (
  filterToggleData = InitState.gamesFilterToggle,
  pagination = 1,
  clubId = '',
  searchName = ''
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
          checkedToggle[el].push(elInner);
        }
      });
    });

    const filterData = {
      checkedToggle,
      pagination,
      clubId,
      searchName
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
