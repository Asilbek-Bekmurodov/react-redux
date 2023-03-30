import { applyMiddleware, createStore } from "redux";
import { countReducer } from "./count";
import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "../saga";

const middlewareSaga = createSagaMiddleware();
const rootReducer = combineReducers({
  countReducer,
  userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(middlewareSaga))
);

middlewareSaga.run(rootWatcher);
