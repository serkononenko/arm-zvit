const initialState = {
    isFetching: false,
    profile: {}
}

export default function profileReducer(state = initialState, action) {
    switch(action.type) {
        case 'REQUEST_PROFILE':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'RECEIVE_PROFILE':
            return Object.assign({}, state, {
                profile: action.payload,
                lastUpdated: action.receivedAt
            });
        case 'CLEAR_PROFILE':
            return Object.assign({}, state, initialState)
        default: return state
    }
}