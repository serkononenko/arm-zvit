import {
    REQUEST_DEPARTMENT, RECEIVE_DEPARTMENT, RECEIVE_DEPARTMENT_LIST, FAILURE_DEPARTMENT, 
    UPDATE_DEPARTMENT, UPDATE_DEPARTMENT_FAILURE, UPDATE_DEPARTMENT_SUCCESSFUL
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
            isUpdated: false,
            department: action.payload
        });
    case RECEIVE_DEPARTMENT_LIST:
        return Object.assign({}, state, {
            isFetching: false,
            isReceived: true,
            isUpdated: false,
            departmentList: action.payload
        });
    case FAILURE_DEPARTMENT:
        return Object.assign({}, state, {
            isFetching: false,
            message: action.message
        });
    case UPDATE_DEPARTMENT:
        return Object.assign({}, state, {
            isFetching: true
        });
    case UPDATE_DEPARTMENT_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            isUpdated: false,
            errorMessage: action.message
        });
    case UPDATE_DEPARTMENT_SUCCESSFUL:
        return Object.assign({}, state, {
            isFetching: false,
            isUpdated: true
        });
    default: return state;
    }
}