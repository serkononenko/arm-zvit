export const REQUEST_DEPARTMENT = 'REQUEST_DEPARTMENT';
export const RECEIVE_DEPARTMENT_LIST = 'RECEIVE_DEPARTMENT_LIST';
export const RECEIVE_DEPARTMENT = 'RECEIVE_DEPARTMENT';
export const FAILURE_DEPARTMENT = 'FAILURE_DEPARTMENT';

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
        payload: data
    };
}

function receiveDepartmentList(data) {
    return {
        type: RECEIVE_DEPARTMENT_LIST,
        isFetching: false,
        isReceived: true,
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