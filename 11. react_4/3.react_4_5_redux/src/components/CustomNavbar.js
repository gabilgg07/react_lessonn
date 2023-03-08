import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbara = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">
            Songs Page
          </Link>
          <Link className="nav-link" to="/shrtcode">
            Link Shortener
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbara;
