import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer } from './reducers';

const InitState = {
  num: NaN,
  clubs: [],
  games: [],
  filter: {
    equipment: {
      ps: false,
      oculus: false,
      htc: false,
      fullbody: false,
    },
    date: {
      2019: false,
      2018: false,
      2017: false,
      2016: false,
      2015: false,
      2014: false,
      2013: false,
    },
    age: {
      0: false,
      3: false,
      7: false,
      12: false,
      16: false,
      18: false,
    },
    tags: {
      zombie: false,
      kids: false,
      music: false,
      blood: false,
      magic: false,
      adult: false,
    },
  },
};

export function initializeStore(initialState = InitState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
