import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <header className="dark-header">
      <Container>
        <Row className="between-center">
          <Col md={5}>
            <h2 className="title">Where in the world?</h2>
          </Col>
          <Col md={2}>
            <div className="mode">
              <span className="icon-box">
                <i className="fa-solid fa-sun"></i>
                {/* <i className="fa-solid fa-moon"></i> */}
              </span>
              <p>Light Mode</p>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default CustomNavbar;
