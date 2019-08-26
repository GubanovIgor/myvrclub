// REDUCERS
import { actionTypes } from './types';

export const reducer = (state = exampleInitialState, action) => {
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
    default:
      return state
  }
};