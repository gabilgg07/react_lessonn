import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const acntInfo = useSelector((state) => state.acntInfo);
  const navigate = useNavigate();

  const handleClickBuyBtn = () => {
    if (!Object.keys(acntInfo).length > 0) {
      navigate("/login?products");
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/180/100" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button onClick={handleClickBuyBtn} variant="primary">
                Buy
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/180/100" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button onClick={handleClickBuyBtn} variant="primary">
                Buy
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/180/100" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button onClick={handleClickBuyBtn} variant="primary">
                Buy
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/180/100" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button onClick={handleClickBuyBtn} variant="primary">
                Buy
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
