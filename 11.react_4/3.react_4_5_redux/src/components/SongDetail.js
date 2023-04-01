import React from "react";
import { useSelector } from "react-redux";
import { Card, Alert } from "react-bootstrap";

const SongDetail = () => {
  const song = useSelector((state) => state.selectedSong);

  return (
    <>
      <h2 className="text-center text-success">Song Detail</h2>
      {song ? (
        <div className="d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Song Title: {song.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Song Length: {song.length}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <Alert variant="danger">No Song selected, yet!</Alert>
      )}
    </>
  );
};

export default SongDetail;
