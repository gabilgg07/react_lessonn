import { SELECT_SONG } from "../constants/type";

export const songList = () => {
  return [
    {
      title: "Numb",
      length: "03:24",
    },
    {
      title: "In da club",
      length: "02:26",
    },
    {
      title: "Drip drop",
      length: "03:08",
    },
    {
      title: "Stan",
      length: "04:11",
    },
  ];
};

export const selected_song = (selectedSong = null, action) => {
  if (action.type === SELECT_SONG) {
    return (selectedSong = action.payload);
  }

  return selectedSong;
};
