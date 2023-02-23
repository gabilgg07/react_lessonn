import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Product = ({ item }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            <strong>Category: </strong> {item.category}
          </Card.Text>
          <Card.Text>
            <strong>Votes: </strong> {item.votes}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
