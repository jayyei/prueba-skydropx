import {defineState} from 'redux-localstore'

import {
    SET_SHOW_TYPE,
    SET_ID_SHOW,
    SET_FAVORITE_SHOW
} from '../types'


const defaultState = {
    showId: null,
    favoriteShows: [],
    showType: ''
}

const initialState = defineState(defaultState)('show')

export default function showReducer (state = initialState, action) {
    switch (action.type) {
        case SET_SHOW_TYPE:
            return {
                ...state,
                showType: action.payload
            }
        case SET_ID_SHOW:
            return {
                ...state,
                showId: action.payload
            }
        case SET_FAVORITE_SHOW:
            let favoriteShows = [...state.favoriteShows]
            if ( state.favoriteShows.find(e => e === action.payload)) {
                favoriteShows = state.favoriteShows.filter(e => e !== action.payload);
            } else {
               favoriteShows.push(action.payload); 
            }
            return {
                ...state,
                favoriteShows
            }
        default:
            return state;
    }
}