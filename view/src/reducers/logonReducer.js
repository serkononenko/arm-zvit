import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
} from '../actions/loginActions';
import {
    LOGOUT_SUCCESS
} from '../actions/logoutActions';

const initialState = function() {
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    if (loggedIn) return {
        loggedIn
    };
    return {};
};

export default function logonReducer(state = initialState(), action) {
    switch (action.type) {
    case LOGIN_REQUEST:
        return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false
        });
    case LOGIN_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: true,
            errorMessage: '',
            loggedIn: action.payload
        });
    case LOGIN_FAILURE: 
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: false,
            errorMessage: action.message
        });
    case LOGOUT_SUCCESS:
        return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false
        });
    default: return state;
    }
}