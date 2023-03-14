import React, { useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Container className="mt-5">
        <h2 className="text-center text-secondary mb-3">Users</h2>
        <Row>
          {users.map((user) => (
            <Col md={3} key={user.id} className="mb-2">
              <Card>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {user.username}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Email:</strong> {user.email} <br />
                    <strong>Phone:</strong> {user.phone} <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <hr />
      </Container>
    </div>
  );
};

export default Users;
