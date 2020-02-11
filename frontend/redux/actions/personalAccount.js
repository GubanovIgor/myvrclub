import { actionTypes } from "../types.js"
import { API_PREFIX } from '../../services/consts/consts'

// Получаем все заказы клуба
export const requestGetClubOrders = (clubOrders) => {
  return {
    type: actionTypes.GET_CLUB_ORDERS,
    clubOrders
  };
};

export const getClubOrdersThunk = (clubId, date) => (
  async (dispatch) => {
    const resp = await fetch(`${API_PREFIX}/order/?clubId=${clubId}&date=${date}`, {
      method: "GET",
      headers: {
        "Content-Type": "application-json",
      },
    })
    const clubOrders = await resp.json()
    dispatch(requestGetClubOrders(clubOrders));
  }
)