export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

function requestRegistration(creds) {
    return {
        type: REGISTRATION_REQUEST,
        isFetching: true,
        isRegistered: false,
        creds
    };
}

function registrationSuccess() {
    return {
        type: REGISTRATION_SUCCESS,
        isFetching: false,
        isRegistered: true
    };
}

function registrationError(message) {
    return {
        type: REGISTRATION_FAILURE,
        isFetching: false,
        isRegistered: false,
        message
    };
}

export function registrationUser({ login, password, department }) {
    
    let config = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: login.toLowerCase(),
            password,
            department
        })
    };

    return dispatch => {
        dispatch(requestRegistration({ login, password, department }));
        return fetch('/api/registration', config)
            .then(res => {
                if (!res.ok) {
                    dispatch(registrationError(res.statusText));
                } else {
                    dispatch(registrationSuccess());
                }
            });
    };
}