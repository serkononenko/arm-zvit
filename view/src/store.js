import { createStore } from 'redux';
import app from './reducers/rootReducer';

let store = createStore(app);

export default store;