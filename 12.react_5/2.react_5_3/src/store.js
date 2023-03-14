import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { coderReduces, userReduces, studentReduces } from "./reducers";

const reducers = combineReducers({
  users: userReduces,
  coders: coderReduces,
  students: studentReduces,
});

const store = legacy_createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
