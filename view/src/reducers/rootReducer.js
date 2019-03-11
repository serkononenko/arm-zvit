// Initial state
export const initialState = {
    loggedIn: false
};

//Reducer
export  function rootReduser(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_LOGON':
        return Object.assign({}, state, {
            loggedIn: action.payload
        });
        default: return state;
    }
};