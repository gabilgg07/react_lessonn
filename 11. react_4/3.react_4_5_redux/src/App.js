import { Container, Row, Col } from "react-bootstrap";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

function App() {
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
}

export default App;
