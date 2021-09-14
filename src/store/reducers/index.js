import { combineReducers } from "redux";
import loginTypeReducer from "./loginTypeReducer";

const reducers = combineReducers({
  loginType: loginTypeReducer,
});

export default reducers;
