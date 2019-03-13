const initialState = {
    loggedIn: localStorage.getItem('loggedIn')
};

export default function logonReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_LOGON':
        return Object.assign({}, state, {
            loggedIn: action.payload
        });
        default: return state;
    }
};