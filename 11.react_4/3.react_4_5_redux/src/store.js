import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { songList, selected_song } from "./reducers";

const reducers = combineReducers({
  songs: songList,
  selectedSong: selected_song,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
