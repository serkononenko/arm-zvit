import { TOGGLE_LOGON, TOGGLE_LOGOUT } from './actionTypes';

//Action creator
export function toggleLogon(boolean) {
    return {
        type: TOGGLE_LOGON,
        loggedIn: boolean
    }
};

export function toggleLogout(boolean) {
    return {
        type: TOGGLE_LOGOUT,
        loggedIn: boolean
    }
};