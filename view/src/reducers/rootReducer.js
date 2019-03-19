import { combineReducers } from 'redux';
import logonReducer from './logonReducer';
import departmentReducer from './departmentReducer';
import profileReducer from './profileReducer';

//Reducer
export default combineReducers({
    logon: logonReducer,
    department: departmentReducer,
    profile: profileReducer
});