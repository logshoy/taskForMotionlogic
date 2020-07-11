import {FETCH_CITY_START, FETCH_CITY_END, ADD_CITY, REMOVE_CITY, SEARCH_INPUT } from '../actions/actionsTypes'

// let cityChoose = window.localStorage.getItem('cityChoose');

const initialState = {
    city: [],
    search : '',
    cityChoose: []
}

export default function cityReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_CITY_START: 
            return {
                ...state 
            }
        case FETCH_CITY_END: 
            return {
                ...state ,city: action.citys
            }
        case SEARCH_INPUT:
            return {
                ...state, search: action.search
            }
        case ADD_CITY: 
            return {
                ...state, cityChoose: state.cityChoose.concat(action.city)
            }
        case REMOVE_CITY: 
            return {
                ...state, cityСhoose: state.cityChoose.filter(element => element !== action.city)
            }
        default: 
            return state
    }
}