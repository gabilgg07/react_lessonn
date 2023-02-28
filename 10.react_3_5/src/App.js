import "./App.css";
import API from "./api/api";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ImageItem from "./components/ImageItem";

function App() {
  const [term, setTerm] = useState("home");
  const [photos, setPhotos] = useState([]);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    getPhotoPagesCountByTerm(term);
  };

  const getPhotoPagesCountByTerm = (value) => {
    API.get("search/photos", {
      params: {
        query: value,
        page: Math.floor(Math.random() * 500) + 1,
      },
    }).then((r) => {
      console.log(r.data.total_pages);
      const totalPages = r.data.total_pages;
      getPhotoByTerm(value, totalPages);
    });
  };

  const getPhotoByTerm = async (value, count) => {
    const { data } = await API.get("search/photos", {
      params: {
        query: value,
        page: Math.floor(Math.random() * count) + 1,
      },
    });
    console.log(count);
    setPhotos(data.results);
  };

  useEffect(() => {
    getPhotoPagesCountByTerm(term);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col md={6}>
          <Form onSubmit={handleSubmitForm}>
            <Form.Label>Photo Name to Search: </Form.Label>
            <Form.Control
              type="text"
              name="term"
              value={term}
              placeholder="search photo ..."
              onChange={(e) => setTerm(e.target.value)}
            />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="masonry_layout">
            {Boolean(photos.length) &&
              photos.map((photo) => <ImageItem key={photo.id} photo={photo} />)}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
