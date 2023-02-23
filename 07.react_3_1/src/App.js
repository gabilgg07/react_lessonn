import "./App.css";

import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Product from "./components/Product";
import { products } from "./seed/seed";

function App() {
  const [items, setItems] = useState(products);
  const [btnText, setBtnText] = useState(false);

  const handleOrderedBtnClick = () => {
    // variable-siz de isledi
    let sortedItems = [];

    if (btnText) {
      sortedItems = items.sort((a, b) => a.votes - b.votes);
    } else {
      sortedItems = items.sort((a, b) => b.votes - a.votes);
    }

    // set etmeden de isledi
    setItems(sortedItems);

    // qisa yazilis sadece siralamani tersine cevirir:

    // const sortItems = items.sort((a, b) => -1);
    // setItems(sortItems);

    setBtnText(!btnText);
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2
            className="mt-5 d-flex justify-content-between"
            style={{ color: "#105a6f" }}
          >
            Products
            <Button
              onClick={handleOrderedBtnClick}
              variant="outline-secondary"
              title={(btnText ? "Artan" : "Azalan") + " sıra ilə yığmaq"}
            >
              Ordered By To{" "}
              <strong
                title={btnText ? "Artan" : "Azalan"}
                className="text-info"
              >
                {btnText ? "Increasing" : "Decreasing"}
              </strong>{" "}
              Votes
            </Button>
          </h2>
          <hr />
        </Col>
        {items.map((item) => (
          <Col key={item.id}>
            <Product item={item} />
          </Col>
        ))}
      </Row>
      <hr />
    </Container>
  );
}

export default App;
