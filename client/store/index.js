import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./user";
import book from "./book";
import recipe from "./recipe";
import ingredient from "./ingredient";
import step from "./step";

const reducer = combineReducers({ user, book, recipe, ingredient, step });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./user";
export * from "./book";
export * from "./recipe";
export * from "./ingredient";
export * from "./step";
