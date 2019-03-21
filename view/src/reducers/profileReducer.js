const initialState = {
    isFetching: false,
    uploading: false,
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
            return Object.assign({}, state, initialState);
        case 'START_UPLOAD':
            return Object.assign({}, state, {
                uploading: action.payload
            });
        case 'FINISH_UPLOAD':
            return Object.assign({}, state, {
                uploading: action.payload
            });
        default: return state
    }
}