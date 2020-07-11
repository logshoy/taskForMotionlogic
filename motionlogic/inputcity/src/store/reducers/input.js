import {FETCH_CITY_START, FETCH_CITY_END, ADD_CITY, REMOVE_CITY, SEARCH_INPUT, LOCALSTORAGE_SET, LOCALSTORAGE_GET } from '../actions/actionsTypes'

let cityChooseLocal = window.localStorage.getItem('cityChoose');

const initialState = {
    city: [],
    search : '',
    cityChoose: []
}

export default function cityReducer(state = initialState, action) {
    if(action.type === LOCALSTORAGE_SET) window.localStorage.setItem('cityChoose', JSON.stringify(state.cityChoose))
    // if (action.type === ) state.cityChoose.filter(element => element !== action.city)
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
        case LOCALSTORAGE_GET:
            return {
                ...state, cityChoose: Array.from(JSON.parse(cityChooseLocal))
            }
        case ADD_CITY: 
            return {
                ...state, cityChoose: state.cityChoose.concat(action.city)
            }
        case REMOVE_CITY: 
            return {
            ...state, cityChoose: state.cityChoose.filter(element => element !== action.city)
        }
        default: 
            return state
    }
}