import {
    REQUEST_DEPARTMENT, RECEIVE_DEPARTMENT, FAILURE_DEPARTMENT
} from '../actions/departmentActions';

const initialState = {
    isFetching: false,
    isReceived: false,
    isUpdated: false,
    department: []
};

export default function departmentReducer(state = initialState, action) {
    switch (action.type) {
    case REQUEST_DEPARTMENT:
        return Object.assign({}, state, {
            isFetching: true
        });
    case RECEIVE_DEPARTMENT:
        return Object.assign({}, state, {
            isFetching: false,
            isReceived: true,
            department: action.payload,
        });
    case FAILURE_DEPARTMENT:
        return Object.assign({}, state, {
            isFetching: false,
            message: action.message
        });
    default: return state;
    }
}