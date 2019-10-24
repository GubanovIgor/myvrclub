// import types
import fetch from 'isomorphic-unfetch';
import { API_PREFIX } from '../../services/consts/consts';
import {requestGames, requestGetGames} from "../actions.js";

export const getAllGamesAC = (name) => (
  async (dispatch) => {
    dispatch(requestGames());
    const resp = await fetch(`${API_PREFIX}/game?name=${name}`);
    const games = await resp.json();
    dispatch(requestGetGames(games));
  }
);
