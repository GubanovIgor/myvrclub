// REDUCERS
import { actionTypes } from './types';
import {filterToggleAC} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // case actionTypes.TICK:
    //   return Object.assign({}, state, {
    //     lastUpdate: action.ts,
    //     light: !!action.light
    //   });

    case actionTypes.ADDNUM:
      return Object.assign({}, state, {
        num: action.data,
      });
    case actionTypes.REQUESTED_CLUBS:
      return ({
          ...state,
          clubs: action.clubs,
        });
    case actionTypes.REQUESTED_GAMES:
      return ({
        ...state,
        games: action.games,
      });
    case actionTypes.REQUEST_FILTER_TOGGLE_CLUBS:
      const stateCopy = { ...state };
      stateCopy.clubsFilterToggle[action.category][action.item] = !stateCopy.clubsFilterToggle[action.category][action.item];
      return stateCopy;
    case actionTypes.REQUEST_FILTER_TOGGLE_GAMES:
      return state;

    default:
      return state;
  }
};
