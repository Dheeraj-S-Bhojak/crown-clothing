import { combineReducers } from "redux";
import { userReducer } from "./userReducers/user.reducer.js";

export const RootReducer = combineReducers({
  user: userReducer,
});
