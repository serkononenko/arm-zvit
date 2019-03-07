import { createStore } from 'redux';
import app from './reducers/reducer';

let store = createStore(app);