import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";

const Home = () => {
  const acntInfo = useSelector((state) => state.acntInfo);

  const handleLogoutBtn = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">LoGo-GGG</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {isEmpty(acntInfo.acntInfo) ? (
                <>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </>
              ) : (
                <a href="#" className="nav-link" onClick={handleLogoutBtn}>
                  Logout
                </a>
              )}
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
