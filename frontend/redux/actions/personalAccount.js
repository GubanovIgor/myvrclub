import { actionTypes } from "../types.js"
import { API_PREFIX } from '../../services/consts/consts'
import fetch from 'isomorphic-unfetch';

// Получаем все заказы клуба
export const requestGetClubOrders = (clubOrders) => {
  return {
    type: actionTypes.GET_CLUB_ORDERS,
    clubOrders
  };
};

export const getClubOrdersThunk = (clubId = '', date = '') => (
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

// Удаляем заказ из бд
export const requestDeleteClubOrder = (orderId) => {
  return {
    type: actionTypes.DELETE_CLUB_ORDER,
    orderId
  };
};

export const deleteClubOrderThunk = (orderId) => (
  async (dispatch) => {
    console.log(orderId)
    const resp = await fetch(`${API_PREFIX}/order`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({orderId})
    })

    const data = await resp.json()
    console.log(data)

    dispatch(requestDeleteClubOrder(orderId));
  }
)