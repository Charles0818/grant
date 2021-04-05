import { createStore, applyMiddleware, compose } from 'redux';
import createDebounce from "redux-debounced"
import thunk from "redux-thunk"
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import allReducers from './reducers';
export * from './types';
export * from './actions';

const sagaMiddleWare = createSagaMiddleware();
const middlewares = [thunk, createDebounce(), sagaMiddleWare]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(allReducers, composeEnhancers(applyMiddleware(...middlewares)));
sagaMiddleWare.run(rootSaga);
