import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReduser from './reducers/rootReducer';

let store = createStore(rootReduser, applyMiddleware(ReduxThunk));

export default store;