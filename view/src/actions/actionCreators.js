import { TOGGLE_LOGON } from './actionTypes';

//Action creator
export function toggleLogon(boolean) {
    return {
        type: TOGGLE_LOGON,
        payload: boolean
    }
};