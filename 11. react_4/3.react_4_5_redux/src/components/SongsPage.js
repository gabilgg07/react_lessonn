import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const SongsPage = () => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col md={6}>
            <SongList />
          </Col>
          <Col md={6}>
            <SongDetail />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SongsPage;
