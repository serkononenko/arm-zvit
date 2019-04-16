import {
    REQUEST_DEPARTMENT, 
    RECEIVE_DEPARTMENT,
    REQUEST_PROFILE,
    RECEIVE_PROFILE,
    CLEAR_PROFILE,
    START_UPDATE,
    FINISH_UPDATE
} from './actionTypes';

export function requestDepartment() {
    return {
        type: REQUEST_DEPARTMENT
    };
}

export function receiveDepartment(data) {
    return {
        type: RECEIVE_DEPARTMENT,
        payload: data,
        receivedAt: Date.now()
    };
}

export function fetchDepartment() {
    return function(dispatch) {
        dispatch(requestDepartment());
        return fetch('/api/department/list', {method: 'GET'})
            .then((res) => {
                res.json().then((data) => {
                    dispatch(receiveDepartment(data));
                });
            });
    };
}

function requestProfile() {
    return {
        type: REQUEST_PROFILE
    };
}

function receiveProfile(data) {
    return {
        type: RECEIVE_PROFILE,
        payload: data,
        receivedAt: Date.now()
    };
}

export function fetchProfile(url) {
    return function(dispatch) {
        dispatch(requestProfile());
        return fetch('/api'+url, {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        }).then((res) => {
            res.json().then((data) => {
                dispatch(receiveProfile(data));
            });
        });
    };
}

export function clearUserProfile() {
    return {
        type: CLEAR_PROFILE
    };
}

function startUpdate() {
    return {
        type: START_UPDATE,
        payload: true
    };
}

function finishUpdate() {
    return {
        type: FINISH_UPDATE,
        payload: false
    };
}

export function updateProfile(url, data) {
    return function(dispatch) {
        dispatch(startUpdate());
        return fetch('/api'+url, {
            method: 'POST',
            body: data
        }).then((res) => {
            dispatch(finishUpdate());
            if (res.redirected) {
                return res.url;
            }
        });
    };
}