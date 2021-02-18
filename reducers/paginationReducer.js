// TODO import types for switch case

const initialState = {
    page: 1,
    totalPages: 1,
    alphabeticalOrder: false,
    puntuationOrder: false
}


export default function paginationReducer (state = initialState, action) {
    switch (action.type) {
        case 'Hi':
            
            break;

        default:
            return state;
    }
}