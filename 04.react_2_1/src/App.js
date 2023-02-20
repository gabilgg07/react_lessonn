import logo from "./2020_09_28-I.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit {/* JSX inline-style */}
          <code
            style={{
              color: "#f46edd",
              backgroundColor: "black",
              padding: "4px 14px",
            }}
          >
            src/App.js
          </code>{" "}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Form className="my-5 p-4 border border-info border-3 rounded text-center">
          <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
            <Form.Label>Text</Form.Label>
            <Form.Control type="text" name="text" placeholder="Enter text" />
            <Form.Text className="text-muted">
              We'll never share your text with anyone else.
            </Form.Text>
          </Form.Group>
          <Button
            variant="outline-info"
            type="submit"
            size="lg"
            className="text-white mt-4"
          >
            Button from React Bootstrap
          </Button>
        </Form>
      </header>
      <Container className="my-4">
        <Row>
          <Col className="mb-lg-0 mb-2">
            <Button variant="secondary" className="w-100 h-100">
              Container, Row, Col1 icinde
            </Button>
          </Col>
          <Col className="mb-lg-0 mb-2">
            <Button className="w-100 h-100">Container, Row, Col2 icinde</Button>
          </Col>
          <Col lg={4} md={12} className="mb-lg-0 mb-2">
            <Button variant="danger" className="w-100 h-100">
              Container, Row, Col3 with lg={"{4}"} icinde
            </Button>
          </Col>
          <Col className="mb-lg-0 mb-2">
            <Button variant="warning" className="w-100 h-100">
              Container, Row, Col4 icinde
            </Button>
          </Col>
          <Col className="mb-lg-0 mb-2">
            <Button variant="success" className="w-100 h-100">
              Container, Row, Col5 icinde
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
