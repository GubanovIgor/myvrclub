// import types
import { actionTypes } from './../types';
import {getGamesAC} from "./games.js";
import {getClubsAC} from "./clubs.js";

// Пагинация
export const requestSwitchPaginationValue = (value) => (
  { type: actionTypes.SWITCH_PAGINATION_VALUE, value }
);

export const switchPaginationValueAC = (value, filterToggleData, type, id = '', namesForSearch) => (
  async (dispatch) => {
    dispatch(requestSwitchPaginationValue(value));
    if (type === 'game') {
      dispatch(getGamesAC(filterToggleData, value, id, namesForSearch));
    };

    if (type === 'club') {
      dispatch(getClubsAC(filterToggleData, value, id, namesForSearch));
    }
  }
);