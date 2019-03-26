const initialState = function() {
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    if (loggedIn) return {
        loggedIn
    }
    return {}
}

export default function logonReducer(state = initialState(), action) {
    switch (action.type) {
        case 'TOGGLE_LOGON':
        return Object.assign({}, state, {
            loggedIn: action.payload
        });
        default: return state;
    }
};