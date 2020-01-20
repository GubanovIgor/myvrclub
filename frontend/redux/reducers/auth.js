// REDUCERS
import { actionTypes } from '../types';

const InitState = {
    logging: false,
    isLogged: false,
}

export default (state=InitState, action) => {
    // console.log('reducer initial state games', state.games);
    // console.log('reducer initial state clubs', state.clubs);
    switch (action.type) {
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

        default:
            return state;
    }
};
