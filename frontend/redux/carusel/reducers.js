// REDUCERS
import { actionTypes } from '../types';

const InitState = {
  caruselIndex: 1
};

export default (state=InitState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_CARUSEL_INDEX:
      return ({...state, caruselIndex: action.caruselIndex});
    default:
      return state;
  }
};
