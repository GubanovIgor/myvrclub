import {actionTypes} from "../types.js";

// Меняем screenMode
export const switchScreenModeAC = (screenMode) => {
  return {
    type: actionTypes.SWITCH_SCREEN_MODE,
    screenMode,
  }
};