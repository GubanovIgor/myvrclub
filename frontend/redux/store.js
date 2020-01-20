import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import clubs from "./clubs/reducers";
import games from "./games/reducers";
import pagination from "./pagination/reducers";
import filter from "./filters/reducers";
import carusel from "./carusel/reducers";

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunkMiddleware)
    : composeWithDevTools(applyMiddleware(thunkMiddleware));

const reducers =  combineReducers({
        clubs,
        games,
    pagination,
    filter,
    carusel
    }
)

export function initializeStore(initialState) {
  //console.log('initialState', initialState);
  return createStore(
      reducers,
      initialState,
      devTools
  );
}
