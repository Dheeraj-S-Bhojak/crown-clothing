import { combineReducers } from "redux";

import { userReducer } from "../utils/reducers/user.reducer.js";
import { categoriesReducer } from "../utils/reducers/category.reducer.js";
import { cartReducer } from "../utils/reducers/cart.reducer.js";

export const RootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
