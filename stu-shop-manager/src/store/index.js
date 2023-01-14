import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import product from './reducers/product';
import notices from './reducers/notice';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ product, notices })

const composes = compose(applyMiddleware(...[thunk]))

const store = createStore(rootReducer, composes);

export default store;
