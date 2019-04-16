export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    };
}

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        payload: user
    };
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    };
}

export function loginUser({ login, password }) {
    
    let config = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: login.toLowerCase(),
            password
        })
    };

    return dispatch => {
        dispatch(requestLogin({ login, password }));
        return fetch('/api/login', config)
            .then(res => {
                if (!res.ok) {
                    dispatch(loginError(res.statusText));
                } else {
                    res.text().then(token => {
                        localStorage.setItem('accessToken', token);
                        const user = atob(token.split('.')[1]);
                        localStorage.setItem('loggedIn', user);
                        dispatch(receiveLogin(JSON.parse(user)));
                    });
                }
            });
    };
}