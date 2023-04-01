import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { registerReducer } from "./reducers";

const reducers = combineReducers({
  acntInfo: registerReducer,
});

const acntInfoFromLocalStorage = localStorage.getItem("acntInfo")
  ? JSON.parse(localStorage.getItem("acntInfo"))
  : {};

const initialState = {
  acntInfo: acntInfoFromLocalStorage,
};

const store = legacy_createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
