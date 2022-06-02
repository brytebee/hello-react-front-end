import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./greetings/greetingsReducer";

const reducer = combineReducers({
  greetRed: reducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
