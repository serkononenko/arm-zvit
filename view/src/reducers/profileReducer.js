import {
    PROFILE_REQUEST, PROFILE_RECEIVE, PROFILE_FAILURE, PROFILE_CLEAR, UPDATE_PROFILE, UPDATE_PROFILE_SUCCESSFUL, UPDATE_PROFILE_FAILURE
} from '../actions/profileActions';

const initialState = {
    isFetching: false,
    isReceived: false,
    isUpdated: false,
    profile: ''
};

export default function profileReducer(state = initialState, action) {
    switch(action.type) {
    case PROFILE_REQUEST:
        return Object.assign({}, state, {
            isFetching: true,
            isReceived: false,
            isUpdated: false
        });
    case PROFILE_RECEIVE:
        return Object.assign({}, state, {
            isFetching: false,
            isReceived: true,
            profile: action.payload
        });
    case PROFILE_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            isReceived: false,
            errorMessage: action.message
        });
    case PROFILE_CLEAR:
        return Object.assign({}, state, {
            isFetching: false,
            isReceived: false,
            profile: action.payload
        });
    case UPDATE_PROFILE:
        return Object.assign({}, state, {
            isFetching: true
        });
    case UPDATE_PROFILE_SUCCESSFUL:
        return Object.assign({}, state, {
            isFetching: false,
            isUpdated: true
        });
    case UPDATE_PROFILE_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            isUpdated: false,
            errorMessage: action.message
        });
    default: return state;
    }
}