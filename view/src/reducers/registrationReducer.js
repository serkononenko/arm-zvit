import {
    REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILURE
} from '../actions/registrationActions';

const initialState = {
    isRegistered: false
};

export default function registrationReducer (state = initialState, action) {
    switch (action.type) {
    case REGISTRATION_REQUEST:
        return Object.assign({}, state, {
            isFetching: true,
            isRegistered: false,
        });
    case REGISTRATION_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            isRegistered: true,
        });
    case REGISTRATION_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            isRegistered: false,
            errorMessage: action.message
        });
    default: return state;
    }
}