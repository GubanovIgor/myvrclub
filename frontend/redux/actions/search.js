import {actionTypes} from "../types.js";

export const setSearchNameAC = (name) => (
  { type: actionTypes.SET_SEARCH_NAME, SearchName: name }
);