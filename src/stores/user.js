import { createStore } from 'redux';

function authentificator(state = {
    isAuthenticated: false,
    user: null
}, action) {
    console.log(state, action);
    switch (action.type) {
        case 'authenticate/login':
            return {
                isAuthenticated: true,
                user: action.payload
            };
        case 'authenticate/logout':
            return {isAuthenticated: false, user: null};
        default:
            return state;
    }
}

export default createStore(authentificator);