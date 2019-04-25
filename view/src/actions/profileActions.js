export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_RECEIVE = 'PROFILE_RECEIVE';
export const PROFILE_FAILURE = 'PROFILE_FAILURE';

export const PROFILE_CLEAR = 'PROFILE_CLEAR';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_SUCCESSFUL = 'UPDATE_PROFILE_SUCCESSFUL';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

function requestProfile() {
    return {
        type: PROFILE_REQUEST,
        isFetching: true,
        isReceived: false,
        isUpdated: false
    };
}

function receiveProfile(data) {
    return {
        type: PROFILE_RECEIVE,
        isFetching: false,
        isReceived: true,
        payload: data
    };
}

function profileError(message) {
    return {
        type: PROFILE_FAILURE,
        isFetching: false,
        isReceived: false,
        message
    };
}

export function fetchProfile(url) {
    return dispatch => {
        dispatch(requestProfile());
        return fetch('/api'+url)
            .then(res => {
                if (!res.ok) {
                    dispatch(profileError(res.statusText));
                } else {
                    res.json().then(data => {
                        dispatch(receiveProfile(data));
                    });
                }
            });
    };
}

export function clearProfile() {
    return {
        type: PROFILE_CLEAR,
        payload: ''
    };
}

function startUpdateProfile() {
    return {
        type: UPDATE_PROFILE,
        isFetching: true
    };
}

function successUpdateProfile() {
    return {
        type: UPDATE_PROFILE_SUCCESSFUL,
        isFetching: false,
        isUpdated: true
    };
}

function failureUpdateProfile(message) {
    return {
        type: UPDATE_PROFILE_FAILURE,
        isFetching: false,
        isUpdated: false,
        message
    };
}

export function updateProfile(url, data) {
    
    let config = {
        method: 'PATCH',
        body: data
    };

    return dispatch => {
        dispatch(startUpdateProfile());
        return fetch('/api'+url, config)
            .then(res => {
                if (!res.ok) {
                    dispatch(failureUpdateProfile(res.statusText));
                } else {
                    dispatch(successUpdateProfile());
                }
            });
    };
}