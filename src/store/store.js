import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";
import { RootReducer } from "../reducers/rootReducer.js";

const middleWares = [
  process.env.NODE_ENV === "development" && logger.default,
].filter(Boolean);

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleWares));
export const store = createStore(RootReducer, undefined, composedEnhancers);
