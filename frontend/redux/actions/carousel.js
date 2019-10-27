import {actionTypes} from "../types.js";

// Двигаем карусель на главной
export const switchCaruselIndexAC = (caruselIndex) => {
  return {
    type: actionTypes.SWITCH_CARUSEL_INDEX,
    caruselIndex,
  };
};