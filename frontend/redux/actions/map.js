
import {actionTypes} from "../types.js";

export const changeMapAC = () => {
  return {
    type: actionTypes.CHANGE_MAP,
  };
};

// скрыть карту
export const offChangeMapAC = () => {
  return {
    type: actionTypes.OFF_CHANGE_MAP,
  };
};