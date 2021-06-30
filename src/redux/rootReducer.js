import LoginReducer from "./loginReducer";
import SignupReducer from "./signupReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    login: LoginReducer,
    signup: SignupReducer
});

export default RootReducer;
