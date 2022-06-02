import { combineReducers, createStore } from "redux";
import reducer from "./greetings/greetingsReducer";

const reducer = combineReducers({
  greetRed: reducer,
});

const store = createStore(reducer);
