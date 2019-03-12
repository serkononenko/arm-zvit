const initialState = {
    isFetching: false,
    department: []
};

export default function departmentReducer(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_DEPARTMENT':
            return Object.assign({}, state, {
                isFetching: true
            })
        case 'RECEIVE_DEPARTMENT':
            return Object.assign({}, state, {
                department: action.payload,
                lastUpdated: action.receivedAt
            })
        default: return state;
    }
}