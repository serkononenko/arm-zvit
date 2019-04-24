import {
    REQUEST_DEPARTMENT, RECEIVE_DEPARTMENT, RECEIVE_DEPARTMENT_LIST, FAILURE_DEPARTMENT
} from '../actions/departmentActions';

const initialState = {
    isFetching: false,
    isReceived: false,
    isUpdated: false,
    departmentList: []
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
            department: action.payload
        });
    case RECEIVE_DEPARTMENT_LIST:
        return Object.assign({}, state, {
            isFetching: false,
            isReceived: true,
            departmentList: action.payload
        });
    case FAILURE_DEPARTMENT:
        return Object.assign({}, state, {
            isFetching: false,
            message: action.message
        });
    default: return state;
    }
}