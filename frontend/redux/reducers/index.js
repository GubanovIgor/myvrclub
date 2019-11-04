import { combineReducers } from 'redux'
import {reducer1} from './reducer.js'

console.log('reducer1',reducer1)


export const reducer = combineReducers({
  reducer1,
})