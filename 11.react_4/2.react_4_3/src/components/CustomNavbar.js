import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbara = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          LoGo
        </Link>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/posts">
            Posts
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbara;
