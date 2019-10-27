// import types
import fetch from 'isomorphic-unfetch';
import {API_PREFIX} from '../../services/consts/consts';
import {requestClubs, requestGetClubs} from "../actions.js";

export const getAllClubsAC = (name) => (
  async (dispatch) => {
    dispatch(requestClubs());
    const resp = await fetch(`${API_PREFIX}/club?name=${name}`);
    console.log('->>>>', name);
    const clubs = await resp.json();
    dispatch(requestGetClubs(clubs));
  }
);