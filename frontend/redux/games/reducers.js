// REDUCERS
import { actionTypes } from '../types';

const InitState = {
    games: [],
    game: {},
    loadingGame: false,
    errorGame: false,
    loading: false
};

export default (state=InitState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_GAMES:
            return ({ ...state, loadingGame: true, errorGame: false, loading: true });
        case actionTypes.REQUESTED_GAMES:
            return ({ ...state, games: action.games, loadingGame: false, errorGame: false, loading: false });
        case actionTypes.REQUESTED_GAME:
            return ({ ...state, game: action.game, loadingGame: false, errorGame: false, loading: false });
        default:
            return state;
    }
};
