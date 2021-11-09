import { combineReducers } from "redux";
import userIdReducer from "./AuthReduces";
import loginTypeReducer from "./loginTypeReducer";

const reducers = combineReducers({
  loginType: loginTypeReducer,
  userType: userIdReducer,
});

export default reducers;
