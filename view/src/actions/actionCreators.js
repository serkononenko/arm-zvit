import { 
    TOGGLE_LOGON, 
    REQUEST_DEPARTMENT, 
    RECEIVE_DEPARTMENT,
    REQUEST_PROFILE,
    RECEIVE_PROFILE
} from './actionTypes';

//Action creator
export function toggleLogon(data) {
    localStorage.setItem('loggedIn', data);
    return {
        type: TOGGLE_LOGON,
        payload: data
    }
};

export function toggleLogout() {
    localStorage.clear();
    return {
        type: TOGGLE_LOGON,
        payload: false
    }
};

export function requestDepartment() {
    return {
        type: REQUEST_DEPARTMENT
    }
};

export function receiveDepartment(data) {
    return {
        type: RECEIVE_DEPARTMENT,
        payload: data,
        receivedAt: Date.now()
    }
};

export function fetchDepartment() {
    return function(dispatch) {
        dispatch(requestDepartment());
        return fetch('/department/list', {method: 'GET'})
        .then((res) => {
            res.json().then((data) => {
                dispatch(receiveDepartment(data))
            })
        });
    }
};

function requestProfile() {
    return {
        type: REQUEST_PROFILE
    }
};

function receiveProfile(data) {
    return {
        type: RECEIVE_PROFILE,
        payload: data,
        receivedAt: Date.now()
    }
};

export function fetchProfile(url) {
    return function(dispatch) {
        dispatch(requestProfile());
        return fetch(url, {
            method: 'GET'
        }).then((res) => {
            res.json().then((data) => {
                dispatch(receiveProfile(data))
            })
        })
    }
};