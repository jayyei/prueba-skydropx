
import {
    SET_AlPHA_PAG, 
    SET_SCORE_PAG,
    SET_TOTAL_PAGES,
    SET_PAGE,
    RESET_PAGINATION
} from '../types';

const initialState = {
    page: 1, // TODO
    total: 1, // TODO
    alphabeticalOrder: false,
    scoreOrder: false
}

// const initialState = defineState(defaultState)('pagination');
// initialState.alphabeticalOrder = false;
// initialState.scoreOrder = false;
// initialState.page = 1;

export default function paginationReducer (state = initialState, action) {
    switch (action.type) {
        case SET_AlPHA_PAG:
            return {
                ...state,
                alphabeticalOrder: !state.alphabeticalOrder,
                scoreOrder: false
            }
        case SET_SCORE_PAG:
            return {
                ...state,
                scoreOrder: !state.scoreOrder,
                alphabeticalOrder: false
            }
        case SET_TOTAL_PAGES:
            return{
                ...state,
                total: action.payload
            }
        case SET_PAGE:
            return{
                ...state,
                page: action.payload
            }
        case RESET_PAGINATION:
            return{
                ...initialState
            }
        default:
            return state;
    }
}