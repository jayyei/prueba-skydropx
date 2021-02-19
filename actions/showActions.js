import {
    SET_SHOW_TYPE,
    SET_ID_SHOW,
    SET_FAVORITE_SHOW,
    SET_SHOW_DETAIL
} from '../types';

// for style button and type of data
export function activeShow(value) {
    return dispatch => {
        dispatch(setShow(value));
    }
}

// for set id show in detail view
export function idShow(id) {
    return dispatch => {
        dispatch(setIdShow(id));
    }
}

// for add favorite show
export function favoriteShow(id) {
    return dispatch => {
        dispatch(setFavoriteShow(id));
    }
}

// for add favorite show
export function showDetail(info) {
    return dispatch => {
        dispatch(setShowDetail(info));
    }
}

// Show actions creators

const setShow = (value) =>({
    type: SET_SHOW_TYPE,
    payload: value
});

const setIdShow = (id) =>({
    type: SET_ID_SHOW,
    payload: id
});

const setFavoriteShow = (id) =>({
    type: SET_FAVORITE_SHOW,
    payload: id
});

const setShowDetail = (info) =>({
    type: SET_SHOW_DETAIL,
    payload: info
});