import { combineReducers } from 'redux';
import logonReducer from './logonReducer';
import registrationReducer from './registrationReducer';
import departmentReducer from './departmentReducer';
import profileReducer from './profileReducer';

//Reducer
export default combineReducers({
    logon: logonReducer,
    registration: registrationReducer,
    department: departmentReducer,
    profile: profileReducer
});