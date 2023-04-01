import React from "react";
import { Container, Row, Col, Navbar, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import myImages from "../files/myImages";

const imgs = myImages();

// Location
export const LocationP = ({ children }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <ul className="d-flex">
        <li>
          <Link className="foot_link" to="/">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link className="foot_link" to="/blogs">
            Blogs
          </Link>
        </li>
        <li>
          <Link className="foot_link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="foot_link" to="/posts">
            Posts
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

// Page Navbar
export const NavbarP = () => {
  return (
    <div className="nav-bar">
      <Navbar bg="dark" variant="dark" className="location">
        <Container className="justify-content-start">
          <Link to="/" className="items_center logo">
            G <span className="logo-span">G</span> G
          </Link>
          <LocationP />
        </Container>
      </Navbar>
    </div>
  );
};

// Page Title
export const TitleP = ({ text }) => {
  return (
    <section className="page_title rounder-top">
      <Container>
        <Row>
          <Col>
            <div className="title">
              <h1>{text}</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Page Section
export const SectionP = ({ text, id, classN, imgId, children }) => {
  return (
    <section
      id={Boolean(id && id.trim()) && id}
      className={`page_section ${Boolean(classN) && classN}`}
      style={{
        backgroundImage: `url${
          Boolean(imgId)
            ? "(" + imgs.find((img) => img.id === imgId)?.imgPath + ")"
            : ""
        }`,
      }}
    >
      <div
        className={`section items_center ${Boolean(imgId) && "bg_img-content"}`}
      >
        <h2>{text}</h2>
        <div>{children}</div>
      </div>

      {Boolean(imgId) && <div className="bg_layout"></div>}
    </section>
  );
};

// Page Table
export const TableP = ({ items, hasLink }) => {
  let counterItem = 1;
  let item = items[0];
  const itemThs = Boolean(item) ? Object.keys(item) : [];
  // for (const key in item) {
  //   itemThs.push(key);
  // }
  console.log(itemThs);

  return (
    <Container>
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            {itemThs.map((th, index) => {
              if (!th.toUpperCase().includes("ID")) {
                return <th key={index}>{th.toUpperCase()}</th>;
              } else {
                return "";
              }
            })}
            {hasLink && <th style={{ minWidth: "150px" }}>Detail Links</th>}
          </tr>
          {/* <Link to={`/posts/${}`} /> */}
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{counterItem++}</td>
                {itemThs.map((th, index) => {
                  if (!th.toUpperCase().includes("ID")) {
                    return <td key={index}>{item[th]}</td>;
                  } else {
                    return "";
                  }
                })}
                {hasLink && (
                  <td>
                    <Link to={`/posts/${item.id}`}>More details...</Link>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

// Page Footer
export const FooterP = ({ text }) => {
  return (
    <footer id="footer">
      <div className="section items_center flex-column">
        <h2>{text}</h2>
        <Link to="/" className="items_center logo">
          G <span className="logo-span">G</span> G
        </Link>
      </div>
      <div className="footer_bottom location">
        <Container>
          <LocationP>
            <p className="copy">© By GabilGG Developer</p>
          </LocationP>
        </Container>
      </div>
    </footer>
  );
};
