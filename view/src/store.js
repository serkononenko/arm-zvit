import { createStore } from 'redux';
import { rootReduser } from './reducers/rootReducer';

let store = createStore(rootReduser);

export default store;