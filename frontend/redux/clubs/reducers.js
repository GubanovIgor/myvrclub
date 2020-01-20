// REDUCERS
import { actionTypes } from '../types';

const InitState = {
    clubs: [],
    loading: false,
    loadingClub: false,
    errorClub: false,
    clubsForMap: [],
    club: {},
};

export default (state=InitState, action) => {
    // console.log('reducer initial state games', state.games);
    // console.log('reducer initial state clubs', state.clubs);
    switch (action.type) {

        case actionTypes.REQUEST_CLUBS:
            return ({ ...state, loadingClub: true, errorClub: false, loading: true });
        case actionTypes.REQUESTED_CLUBS:
            return ({ ...state, clubs: action.clubs, loadingClub: false, errorClub: false, loading: false });
        case actionTypes.REQUESTED_CLUBS_FOR_MAP:
            return ({ ...state, clubsForMap: action.clubs });
        case actionTypes.REQUESTED_CLUB:
            return ({ ...state, club: action.club, loadingClub: false, errorClub: false, loading: false });
        default:
            return state;
    }
};
