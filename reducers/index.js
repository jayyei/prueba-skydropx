import { combineReducers } from 'redux';

// import reducers
import paginationReducer from './paginationReducer';
import showReducer from './showReducer';


export default combineReducers({
    pagination: paginationReducer,
    show: showReducer
});