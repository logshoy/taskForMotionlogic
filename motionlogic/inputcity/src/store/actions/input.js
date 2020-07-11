import {FETCH_CITY_START, FETCH_CITY_END , ADD_CITY, REMOVE_CITY, SEARCH_INPUT, LOCALSTORAGE_SET, LOCALSTORAGE_GET} from './actionsTypes'
import cityJSON from '../../russian-cities.json'

export function fetchCity() {
    return dispatch => {
        dispatch(fetchCityStart())
        try {
            const response = cityJSON
            const citys = []
            Object.keys(response).forEach(city => {
                const ad = response[city]
                citys.push(ad.name)

            })
            dispatch(fetchCityEnd(citys))
            dispatch(localStorageGet())
        } catch (e) {
            console.log(e)
        }
    }
}

export function addCityLocal(city) {
    return dispatch => {
        dispatch(addCity(city))
        
        dispatch(localStorageSet())
    }
}

export function removeCityLocal(city) {
    console.log('gg')
    return dispatch => {
        dispatch(removeCity(city))
        dispatch(localStorageSet())
    }
}

export function localStorageSet() {
    return {
        type: LOCALSTORAGE_SET
    }
}

export function localStorageGet() {
    return {
        type: LOCALSTORAGE_GET
    }
}

export function fetchCityStart() {
    return {
        type: FETCH_CITY_START
    }
}

export function fetchCityEnd(citys) {
    return {
        type: FETCH_CITY_END,
        citys
    }
}

export function searchInput(search) {
    return {
        type: SEARCH_INPUT,
        search
    }
}

export function addCity(city) {
    return {
        type: ADD_CITY,
        city
    }
}

export function removeCity(city) {
    return {
        type: REMOVE_CITY,
        city
    }
}