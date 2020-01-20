// REDUCERS
import { actionTypes } from '../types';

const InitState = {
  paginationValue: 1,
}

export default (state=InitState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_PAGINATION_VALUE:
      return ({...state, paginationValue: action.value,});
    default:
      return state;
  }
};
