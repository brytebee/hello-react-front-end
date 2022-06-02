import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetReducer from './greetings/greetingsReducer';

const reducer = combineReducers({
  greetRed: greetReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
