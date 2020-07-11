import {FETCH_CITY_START, FETCH_CITY_END , ADD_CITY, REMOVE_CITY, SEARCH_INPUT} from './actionsTypes'
import cityJSON from '../../russian-cities.json'

export function fetchCity() {
    return async dispatch => {
        dispatch(fetchCityStart())
        try {
            const response = cityJSON
            const citys = []
            Object.keys(response).forEach(city => {
                const ad = response[city]
                citys.push(ad.name)

            })
            dispatch(fetchCityEnd(citys))
        } catch (e) {
            console.log(e)
        }
    }
}

// export function addCityLocal(city) {
//     localStorage.setItem('city',city)
//     dispatch(addCity(city))
// }

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