import { createAction } from "../reducer/reducer.utils.js";
import USER_ACTION_TYPES from "../constants/user.constants.js";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
