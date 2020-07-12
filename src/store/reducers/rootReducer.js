import {combineReducers} from 'redux'
import inputReducer from './input'

export default combineReducers({
    input: inputReducer,
})