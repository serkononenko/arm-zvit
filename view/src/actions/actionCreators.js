import { 
    TOGGLE_LOGON, 
    REQUEST_DEPARTMENT, 
    RECEIVE_DEPARTMENT,
    REQUEST_PROFILE,
    RECEIVE_PROFILE,
    CLEAR_PROFILE,
    START_UPLOAD,
    FINISH_UPLOAD
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

export function clearUserProfile() {
    return {
        type: CLEAR_PROFILE
    }
};

function startUpload() {
    return {
        type: START_UPLOAD,
        payload: true
    }
}

function finishUpload() {
    return {
        type: FINISH_UPLOAD,
        payload: false
    }
}

export function uploadProfileImage(url, image) {
    return function(dispatch) {
        dispatch(startUpload());
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'image/jpeg'
            },
            body: image
        }).then((res) => {
            dispatch(finishUpload());
            if (res.status == 200) {
                dispatch(fetchProfile(url));
            }
        })
    }
}