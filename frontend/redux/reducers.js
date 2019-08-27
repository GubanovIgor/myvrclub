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


    case actionTypes.REQUEST:
      return ({
        ...state, loading: true, error: false,
      });
    case actionTypes.REQUESTED_CLUBS:
      return ({ ...state, clubs: action.clubs, loading: false, error: false });
    case actionTypes.REQUESTED_GAMES:
      return ({
        ...state,
        games: action.games,
      });
    case actionTypes.REQUEST_FILTER_TOGGLE:
      const stateCopy = { ...state };
      stateCopy.filterToggle[action.category][action.item] = !stateCopy.filterToggle[action.category][action.item];
      return stateCopy;

    default:
      return state;
  }
};
