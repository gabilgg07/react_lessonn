// import { createStore, combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReduces } from "./reducers";

const reducers = combineReducers({
  users: userReduces,
});

const store = legacy_createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
