import React, { useState, useEffect } from "react";
import { Col, Card } from "react-bootstrap";
import API from "../api/api";
import { getDateFormat } from "../helpers/dateFormat";
import { useDispatch } from "react-redux";
import { deleteCoder } from "../actions";
import Group from "./Group";

const Coder = ({ coder }) => {
  const dispatch = useDispatch();
  const [group, setGroup] = useState({});

  useEffect(() => {
    const getGroup = async () => {
      const { data } = await API.get(`/groups/${coder.groupId}`);
      setGroup(data);
    };
    getGroup();
    // eslint-disable-next-line
  }, []);

  const handleDeleteCoder = (e, id) => {
    e.preventDefault();
    dispatch(deleteCoder(id));
  };

  return (
    <Col md={3} key={coder.id} className="mb-2">
      <Card>
        <Card.Body>
          <Card.Title>
            {coder.name} {coder.surname}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {getDateFormat(coder.birthday)}
          </Card.Subtitle>
          <Card.Text>
            <strong>Email:</strong> {coder.email} <br />
            <strong>Phone:</strong> {coder.phone} <br />
            <Group group={group} />
            <Card.Link href="#">Edit</Card.Link>
            <Card.Link href="#" onClick={(e) => handleDeleteCoder(e, coder.id)}>
              Delete
            </Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Coder;
