// import types
import fetch from "isomorphic-unfetch";
import { API_PREFIX } from "../../services/consts/consts";
import { actionTypes } from "../types.js";

// Бронируем сеанс
export const addSession = async data => {
  await fetch(`${API_PREFIX}/club/reservation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

// Получаем занятые сеансы
export const requestGetFreeSessions = freeSessions => ({
  type: actionTypes.REQUESTED_FREE_SESSIONS,
  freeSessions
});

// Получаем данные о свободных сеансах
export const getFreeSessionsThunk = (clubId, date) => (
  async dispatch => {
    console.log(clubId)
    const resp = await fetch(
      `${API_PREFIX}/club/reservation/?clubId=${clubId}&date=${date}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const data = await resp.json();
    console.log(data);
    dispatch(requestGetFreeSessions(data))
  }
)
