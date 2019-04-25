export const REQUEST_DEPARTMENT = 'REQUEST_DEPARTMENT';
export const RECEIVE_DEPARTMENT_LIST = 'RECEIVE_DEPARTMENT_LIST';
export const RECEIVE_DEPARTMENT = 'RECEIVE_DEPARTMENT';
export const FAILURE_DEPARTMENT = 'FAILURE_DEPARTMENT';

export const UPDATE_DEPARTMENT = 'UPDATE_DEPARTMENT';
export const UPDATE_DEPARTMENT_SUCCESSFUL = 'UPDATE_DEPARTMENT_SUCCESSFUL';
export const UPDATE_DEPARTMENT_FAILURE = 'UPDATE_DEPARTMENT_FAILURE';

function requestDepartment() {
    return {
        type: REQUEST_DEPARTMENT,
        isFetching: true,
        isReceived: false,
        isUpdated: false
    };
}

function receiveDepartment(data) {
    return {
        type: RECEIVE_DEPARTMENT,
        isFetching: false,
        isReceived: true,
        isUpdated: false,
        payload: data
    };
}

function receiveDepartmentList(data) {
    return {
        type: RECEIVE_DEPARTMENT_LIST,
        isFetching: false,
        isReceived: true,
        isUpdated: false,
        payload: data
    };
}

function departmentError(message) {
    return {
        type: FAILURE_DEPARTMENT,
        isFetching: false,
        isReceived: false,
        message
    };
}

export function fetchDepartment(url) {
    return function(dispatch) {
        dispatch(requestDepartment());
        return fetch('/api'+url)
            .then(res => {
                if (!res.ok) {
                    dispatch(departmentError(res.statusText));
                } else {
                    res.json().then(data => {
                        if (!Array.isArray(data)) dispatch(receiveDepartment(data));
                        else dispatch(receiveDepartmentList(data));
                    });
                }
            });
    };
}

function startUpdate() {
    return {
        type: UPDATE_DEPARTMENT,
        isFetching: true
    };
}

function successUpdate() {
    return {
        type: UPDATE_DEPARTMENT_SUCCESSFUL,
        isFetching: false,
        isUpdated: true
    };
}

function failureUpdate(message) {
    return {
        type: UPDATE_DEPARTMENT_FAILURE,
        isFetching: false,
        isUpdated: false,
        message
    };
}

export function updateDepartment(url, data) {
    let config = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    };

    return dispatch => {
        dispatch(startUpdate());
        return fetch('/api'+url, config)
            .then(res => {
                if (!res.ok) {
                    dispatch(failureUpdate(res.statusText));
                } else {
                    dispatch(successUpdate());
                }
            });
    };
}