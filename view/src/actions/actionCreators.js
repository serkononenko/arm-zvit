//Action creator
export function toggleLogon(boolean) {
    return {
        type: TOGGLE_LOGON,
        loggedIn: boolean
    }
};

//const boundToogleLogon = (boolean) => dispatch(toggleLogon(boolean));