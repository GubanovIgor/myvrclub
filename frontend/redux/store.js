import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { creducer } from './reducers';

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunkMiddleware)
    : composeWithDevTools(applyMiddleware(thunkMiddleware));

export function initializeStore(initialState) {
  //console.log('initialState', initialState);
  return createStore(
      creducer,
      initialState,
      devTools
  );
}
