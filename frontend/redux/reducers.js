// REDUCERS
import { actionTypes } from './types';

export const reducer = (state, action) => {
  // console.log('reducer initial state games', state.games);
  // console.log('reducer initial state clubs', state.clubs);
  switch (action.type) {

    case actionTypes.REQUEST_CLUBS:
      return ({ ...state, loadingClub: true, errorClub: false, loading: true });
    case actionTypes.REQUESTED_AMOUNT_CLUBS:
      return ({ ...state, clubsAmount: action.value });
    case actionTypes.REQUEST_GAMES:
      return ({ ...state, loadingGame: true, errorGame: false, loading: true });
    case actionTypes.REQUESTED_AMOUNT_GAMES:
      return ({ ...state, gamesAmount: action.value });
    case actionTypes.REQUESTED_CLUBS:
      return ({ ...state, clubs: action.clubs, loadingClub: false, errorClub: false, loading: false });
    case actionTypes.REQUESTED_CLUBS_FOR_MAP:
      return ({ ...state, clubsForMap: action.clubs });
    case actionTypes.REQUESTED_CLUB:
      return ({ ...state, club: action.club, loadingClub: false, errorClub: false, loading: false });
    case actionTypes.REQUESTED_GAMES:
      return ({ ...state, games: action.games, loadingGame: false, errorGame: false, loading: false });
    case actionTypes.SET_SEARCH_NAME:
      return ({ ...state, SearchName: action.SearchName });
    case actionTypes.REQUESTED_GAME:
      return ({ ...state, game: action.game, loadingGame: false, errorGame: false, loading: false });
    case actionTypes.REQUEST_FILTER_TOGGLE_CLUBS:
      const stateCopy = { ...state };
      stateCopy.clubsFilterToggle[action.category][action.item] = !stateCopy.clubsFilterToggle[action.category][action.item];
      return stateCopy;
    case actionTypes.REQUEST_FILTER_TOGGLE_GAMES:
      const stateCopy1 = { ...state };
      stateCopy1.gamesFilterToggle[action.category][action.item] = !stateCopy1.gamesFilterToggle[action.category][action.item];
      return stateCopy1;
    case actionTypes.SWITCH_PAGINATION_VALUE:
      return ({ ...state, paginationValue: action.value, });
    case actionTypes.CHANGE_MAP:
      return ({ ...state, map: !state.map, });
    case actionTypes.SHOW_FILTER_TOGGLE:
      return ({ ...state, showFilter: !state.showFilter, });
    case actionTypes.CURRENT_PAGE:
      return ({ ...state, currentPage: action.pageNumber, });
    case actionTypes.SWITCH_CARUSEL_INDEX:
      return ({ ...state, caruselIndex: action.caruselIndex, });
    case actionTypes.SWITCH_SCREEN_MODE:
      return ({ ...state, screenMode: action.screenMode, });

    //***************LOGIN-LOGOUT*************
    case actionTypes.REQUEST_LOGIN:
      return ({ ...state, logging: true });
    case actionTypes.REQUEST_END_LOGIN:
      return ({ ...state, logging: false });
    case actionTypes.LOGIN_SUCSESS:
      return ({ ...state, isLogged: true });
    case actionTypes.LOGIN_REJECT:
      return ({ ...state, isLogged: false });
    //******************************

    //****************Reservation**************
    case actionTypes.REQUESTED_FREE_SESSIONS:
      console.log('hui')
      return ({...state, freeSessions: action.freeSessions})
    //******************************
    default:
      return state;
  }
};
