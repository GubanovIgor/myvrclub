import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer } from './reducers';

const InitState = {
  num: NaN,
  clubs: [],
}

export function initializeStore(initialState = InitState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
