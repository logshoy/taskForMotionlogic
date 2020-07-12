import {FETCH_CITY_START, FETCH_CITY_END, ADD_CITY, REMOVE_CITY, SEARCH_INPUT, LOCALSTORAGE_SET, LOCALSTORAGE_GET } from '../actions/actionsTypes'

let cityChooseLocal

if (window.localStorage.getItem('cityChoose') !== null) {
    cityChooseLocal = Array.from(JSON.parse(window.localStorage.getItem('cityChoose')))
} else {
    cityChooseLocal = []
}

const initialState = {
    city: [],
    search : '',
    cityChoose: []
}

export default function cityReducer(state = initialState, action) {
    if(action.type === LOCALSTORAGE_SET) window.localStorage.setItem('cityChoose', JSON.stringify(state.cityChoose))
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
                ...state, cityChoose: cityChooseLocal
            }
        case ADD_CITY: 
            return {
                ...state, 
                cityChoose: state.cityChoose.concat(action.city),
                city: state.city.filter(element => element !== action.city)
            }
        case REMOVE_CITY: 
            return {
            ...state, 
            cityChoose: state.cityChoose.filter(element => element !== action.city),
            city: state.city.concat(action.city)
        }
        default: 
            return state
    }
}