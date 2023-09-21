import {  combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux';
import itemReducer from './item-reducer';




let reducers = combineReducers({
    itemPage:itemReducer,
});

let store = createStore(reducers);
window.store = store;

export default store