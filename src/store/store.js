import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";
import { RootReducer } from "./rootReducer.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

const middleWares = [
  // process.env.NODE_ENV === "development" && logger,
  process.env.NODE_ENV === "development" && logger,
].filter(Boolean);

const persistConfig = {
  key: "root",
  storage,
  blackList: ["user"],
};
const persistedReducer = persistReducer(persistConfig, RootReducer);

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleWares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
