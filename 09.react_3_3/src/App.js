import { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { useCopyClipboard, useMobileDecect } from "./hooks/hooks";
import "./App.css";

function App() {
  const [term, setTerm] = useState("");
  const [copyItems, setCopyItems] = useState([]);
  const [copyClipboard, isCopied] = useCopyClipboard();
  const [isMobile] = useMobileDecect();

  console.log(isMobile);

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleCopyBtnClick = () => {
    if (term.trim().length < 1) return;
    copyClipboard(term);
    setCopyItems([...copyItems, term]);
    setTerm("");
  };

  const handleTermKeyDown = (e) => {
    if (term.trim().length < 1) return;
    if (e.key === "Enter") {
      copyClipboard(term);
      setCopyItems([...copyItems, term]);
      setTerm("");
    }
  };

  const handleListItemBtnClick = (e) => {
    // console.log(e.target.innerText);
    copyClipboard(e.target.innerText);
  };

  const handleClearBtnClick = () => {
    setCopyItems([]);
  };

  return (
    <section id="main" className="my-5">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="form-box">
              <Form.Group>
                <Form.Control
                  type="text"
                  name="term"
                  value={term}
                  onChange={handleTermChange}
                  onKeyDown={handleTermKeyDown}
                  className="mb-3"
                />
              </Form.Group>
              <div className="btn-box d-flex justify-content-between">
                <Button onClick={handleCopyBtnClick}>
                  {isCopied ? "Copied" : "Copy"}
                </Button>
                <Button variant="outline-warning" onClick={handleClearBtnClick}>
                  Clear List
                </Button>
              </div>
            </div>
            <div className="copied-list mt-4">
              <h2 className="text-info">Copied Text list:</h2>
              <ListGroup>
                {Boolean(copyItems.length) &&
                  copyItems.map((item, i) => (
                    <ListGroup.Item
                      key={i}
                      action
                      onClick={handleListItemBtnClick}
                    >
                      {item}
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default App;
