import { combineReducers } from 'redux';
import logonReducer from './logonReducer';
import departmentReducer from './departmentReducer';

//Reducer
export default combineReducers({
    logon: logonReducer,
    department: departmentReducer
});