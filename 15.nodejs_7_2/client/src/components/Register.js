import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { registerAccount } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";

const Register = () => {
  const [account, setAccount] = useState({
    email: "",
    name: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const acntInfo = useSelector((state) => state.acntInfo);

  useEffect(() => {
    if (!isEmpty(acntInfo.acntInfo)) {
      navigate("/");
    }
  }, [acntInfo, navigate]);

  const handleChangeInp = (e, field) => {
    setAccount({ ...account, [field]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    dispatch(registerAccount(account));

    if (acntInfo.error === "") {
      setAccount({
        email: "",
        name: "",
        password: "",
      });
    }
  };
  return (
    <div className="items_center h_100vh">
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="register">
              <h2>Sign Up</h2>
              <p>
                If have an account? <Link to="/login">login</Link>.
              </p>
              {acntInfo.error && (
                <span className="text-danger">{acntInfo.error.message}</span>
              )}
              <Form onSubmit={handleSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    value={account.email}
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={(e) => handleChangeInp(e, "email")}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Control
                    value={account.name}
                    type="name"
                    name="name"
                    placeholder="Enter name"
                    onChange={(e) => handleChangeInp(e, "name")}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    value={account.password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => handleChangeInp(e, "password")}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign up
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
