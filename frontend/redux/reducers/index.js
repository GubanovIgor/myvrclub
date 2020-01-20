import { combineReducers } from 'redux'
import auth from "./auth";
import red1 from "./red1";

export const creducer = combineReducers(
    {auth, red1}
)