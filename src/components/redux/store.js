import { combineReducers, createStore } from "redux";
import loginReducer from "./login/reducer";

const rootReducer = combineReducers({
    login: loginReducer
})

export const store = createStore(rootReducer);
