// import types
import fetch from 'isomorphic-unfetch';
import { API_PREFIX } from '../../services/consts/consts';
import { actionTypes } from "../types.js";

// Бронируем сеанс
export const addSession = async (data) => {
  await fetch(`${API_PREFIX}/club/reservation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};