import LoginReducer from "./loginReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    login: LoginReducer
});

export default RootReducer;
