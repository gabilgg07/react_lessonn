import { SELECT_SONG } from "../constants/type";

export const songList = () => {
  return [
    {
      id: 1,
      title: "Numb",
      length: "03:24",
    },
    {
      id: 2,
      title: "In da club",
      length: "02:26",
    },
    {
      id: 3,
      title: "Drip drop",
      length: "03:08",
    },
    {
      id: 4,
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
