import { createStore } from "redux";
import reducer from "./greetings/greetingsReducer";

const store = createStore(reducer);
