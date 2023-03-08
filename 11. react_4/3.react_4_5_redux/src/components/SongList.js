import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSong } from "../actions";

import { ListGroup, Button } from "react-bootstrap";

const SongList = () => {
  const songs = useSelector((state) => state.songs);

  const dispatch = useDispatch();

  const handleSelectBtn = (song) => {
    dispatch(selectSong(song));
  };

  return (
    <>
      <h2 className="text-warning">Song List</h2>
      <ListGroup className="my-2">
        {songs.map((song) => (
          <ListGroup.Item
            key={song.id}
            className=" d-flex justify-content-between"
          >
            {song.title}
            <Button
              onClick={() => handleSelectBtn(song)}
              variant="outline-info"
            >
              Select
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default SongList;
