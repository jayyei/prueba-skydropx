import { defineState } from 'redux-localstore';

import {
    SET_AlPHA_PAG, 
    SET_SCORE_PAG
} from '../types';

const defaultState = {
    page: 1, // TODO
    totalPages: 1, // TODO
    alphabeticalOrder: false,
    scoreOrder: false
}

const initialState = defineState(defaultState)('pagination');
initialState.alphabeticalOrder = false;
initialState.scoreOrder = false;

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
        default:
            return state;
    }
}