import {
    REQUEST_DEPARTMENT, 
    RECEIVE_DEPARTMENT,
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