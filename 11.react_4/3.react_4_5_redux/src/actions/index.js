import { SELECT_SONG } from "../constants/type";

export const selectSong = (song) => {
  return {
    type: SELECT_SONG,
    payload: song,
  };
};
