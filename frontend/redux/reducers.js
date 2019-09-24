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

    case actionTypes.REQUEST:
      return ({
        ...state, loading: true, error: false,
      });
    case actionTypes.REQUEST_GAMES:
      return ({
        ...state, loadingGame: true, errorGame: false,
      });

    case actionTypes.REQUESTED_CLUBS:
      return ({ ...state, clubs: action.clubs, loading: false, error: false });
    case actionTypes.REQUESTED_GAMES:
      return ({ ...state, games: action.games, loadingGame: false, errorGame: false});
    case actionTypes.REQUEST_FILTER_TOGGLE_CLUBS:
      const stateCopy = { ...state };
      stateCopy.clubsFilterToggle[action.category][action.item] = !stateCopy.clubsFilterToggle[action.category][action.item];
      return stateCopy;
    case actionTypes.REQUEST_FILTER_TOGGLE_GAMES:
      const stateCopy1 = { ...state }; // ВОПРОС
      stateCopy1.gamesFilterToggle[action.category][action.item] = !stateCopy1.gamesFilterToggle[action.category][action.item];
      return stateCopy1;
    case actionTypes.SWITCH_PAGINATION_VALUE:
      return ({
        ...state,
        paginationValue: action.value,
      });
    case actionTypes.CHANGE_MAP:
      return ({
        ...state,
        map: true,
      });
    case actionTypes.OFF_CHANGE_MAP:
      return ({
        ...state,
        map: false,
      });
    case actionTypes.SHOW_FILTER_TOGGLE:
      return ({
        ...state,
        showFilter: !state.showFilter,
      })
    case actionTypes.CURRENT_PAGE:
      return ({
        ...state,
        currentPage: action.pageNumber,
      })
    case actionTypes.SWITCH_CARUSEL_INDEX:
      return ({
        ...state,
        caruselIndex: action.caruselIndex,
      })
    case actionTypes.SWITCH_SCREEN_MODE:
      return ({
        ...state,
        screenMode: action.screenMode,
      })

    default:
      return state;
  }
};
