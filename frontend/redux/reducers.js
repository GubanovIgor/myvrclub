// REDUCERS
import { actionTypes } from './types';

export const reducer = (state, action) => {
  // console.log('reducer initial state games', state.games);
  // console.log('reducer initial state clubs', state.clubs);
  switch (action.type) {

//***************************SEARCH******************************************
    case actionTypes.SET_SEARCH_NAME:
      return ({ ...state, SearchName: action.SearchName });

//****************************CLUBS***********************************
    case actionTypes.REQUEST_CLUBS:
      return ({ ...state, loadingClub: true, errorClub: false, loading: true });
    case actionTypes.REQUESTED_CLUBS:
      return ({ ...state, clubs: action.clubs, loadingClub: false, errorClub: false, loading: false });
    case actionTypes.REQUESTED_CLUBS_FOR_MAP:
      return ({ ...state, clubsForMap: action.clubs });
    case actionTypes.REQUESTED_CLUB:
      return ({ ...state, club: action.club, loadingClub: false, errorClub: false, loading: false });

//****************************GAMES*******************************
    case actionTypes.REQUESTED_GAMES:
      return ({ ...state, games: action.games, loadingGame: false, errorGame: false, loading: false });
    case actionTypes.REQUEST_GAMES:
      return ({ ...state, loadingGame: true, errorGame: false, loading: true });
    case actionTypes.REQUESTED_GAME:
      return ({ ...state, game: action.game, loadingGame: false, errorGame: false, loading: false });

//**************************FILTERS********************************
    case actionTypes.REQUEST_FILTER_TOGGLE_CLUBS:
      const stateCopy = { ...state };
      stateCopy.clubsFilterToggle[action.category][action.item] = !stateCopy.clubsFilterToggle[action.category][action.item];
      return stateCopy;
    case actionTypes.REQUEST_FILTER_TOGGLE_GAMES:
      const stateCopy1 = { ...state }; // ВОПРОС
      stateCopy1.gamesFilterToggle[action.category][action.item] = !stateCopy1.gamesFilterToggle[action.category][action.item];
      return stateCopy1;
    case actionTypes.SHOW_FILTER_TOGGLE:
      return ({...state, showFilter: !state.showFilter,});

//*************************PAGINATION**********************************
    case actionTypes.SWITCH_PAGINATION_VALUE:
      return ({...state, paginationValue: action.value,});
    case actionTypes.CHANGE_MAP:
      return ({...state, map: !state.map,});
    // case actionTypes.CURRENT_PAGE:
    //   return ({...state, currentPage: action.pageNumber,});

//*************************CAROUSEL*************************************
    case actionTypes.SWITCH_CARUSEL_INDEX:
      return ({...state, caruselIndex: action.caruselIndex,});
    case actionTypes.SWITCH_SCREEN_MODE:
      return ({...state, screenMode: action.screenMode,});

      //***************LOGIN-LOGOUT*************
    case actionTypes.REQUEST_LOGIN:
      return ({ ...state, logging: true, isLogged: false });
    case actionTypes.LOGIN_SUCSESS:
      return ({ ...state, logging: false, isLogged: true });
    case actionTypes.LOGIN_REJECT:
      return ({ ...state, logging: false, isLogged: false });

    default:
      return state;
  }
};
