import { TOGGLE_LOGON } from '../actions/actionTypes';

const initialState = {
    loggedIn: false
};

//Reducer
export default function app(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_LOGON:
        return Object.assign({}, state, {
            loggedIn: action.loggedIn
        });
        default: return state;
    }
};