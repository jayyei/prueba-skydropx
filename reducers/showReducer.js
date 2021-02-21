import { loadState } from '../store.persist';
import {
    SET_SHOW_TYPE,
    SET_ID_SHOW,
    SET_FAVORITE_SHOW,
    SET_SHOW_DETAIL,
    SET_IS_LOADING
} from '../types'

const initialState = loadState()?.show ?? {
    showId: null,
    favoriteShows: [],
    showType: '',
    showDetail: {},
    isLoading: false
}

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
        case SET_SHOW_DETAIL:
            return {
                ...state,
                showDetail: {
                    ...action.payload
                }
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}