import {
    SET_AlPHA_PAG,
    SET_SCORE_PAG
} from '../types';


// for active alphabetical order
export function activeAlpha() {
    return dispatch => {
        dispatch(setAlpha());
    }
}

// for active score order
export function activeScore() {
    return dispatch => {
        dispatch(setScore());
    }
}


// Pagination action creators

const setAlpha = () =>({
    type: SET_AlPHA_PAG
});

const setScore = () =>({
    type: SET_SCORE_PAG
});