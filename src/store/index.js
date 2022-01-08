import { createStore, combineReducers } from 'redux';
import TestReducer from './reducers/reducer';

const reducers = combineReducers({
    store_test: TestReducer,
});

const store = createStore(reducers);

export default store;