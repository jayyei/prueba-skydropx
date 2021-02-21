import {
    SET_AlPHA_PAG,
    SET_SCORE_PAG,
    SET_TOTAL_PAGES,
    SET_PAGE,
    RESET_PAGINATION
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

export function totalPages(pages) {
    return dispatch => {
        dispatch(setTotalPages(pages));
    }
}

export function Page(page) {
    return dispatch => {
        dispatch(setPage(page));
    }
}

// for reset store pagination
export function reset() {
    return dispatch => {
        dispatch(resetPagination());
    }
}


// Pagination action creators

const setAlpha = () =>({
    type: SET_AlPHA_PAG
});

const setScore = () =>({
    type: SET_SCORE_PAG
});

const resetPagination = () =>({
    type: RESET_PAGINATION
});

const setTotalPages = (pages) =>({
    type: SET_TOTAL_PAGES,
    payload: pages
});

const setPage = (page) =>({
    type: SET_PAGE,
    payload: page
});