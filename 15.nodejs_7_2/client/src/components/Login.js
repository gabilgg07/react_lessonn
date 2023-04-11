import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginAccount } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";

const Login = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const acntInfo = useSelector((state) => state.acntInfo);

  useEffect(() => {
    if (!isEmpty(acntInfo.acntInfo)) {
      navigate("/");
    }
  }, [acntInfo, acntInfo.error, navigate]);

  const handleChangeInp = (e, field) => {
    setAccount({ ...account, [field]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    dispatch(loginAccount(account));

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
      <Container className="my-auto">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="login">
              <h2>Login</h2>
              <p>
                Don't have an account?{" "}
                <Link to="/register">Create your account</Link>, it takes less
                than a minute
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
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
