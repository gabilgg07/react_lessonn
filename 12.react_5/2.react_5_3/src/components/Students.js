import React, { useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, deleteStudent } from "../actions";

const Students = () => {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());

    // eslint-disable-next-line
  }, []);

  const handleDeleteStudent = (e, id) => {
    e.preventDefault();
    dispatch(deleteStudent(id));
  };

  return (
    <div>
      <Container className="mt-5">
        <h2 className="text-center text-secondary mb-3">Students</h2>
        <Row>
          {students.map((student) => (
            <Col md={3} key={student.id} className="mb-2">
              <Card>
                <Card.Body>
                  <Card.Title>{student.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {student.surname}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Email:</strong> {student.email} <br />
                    <strong>Phone:</strong> {student.phone} <br />
                  </Card.Text>
                  <Card.Link href="#">Edit</Card.Link>
                  <Card.Link
                    href="#"
                    onClick={(e) => handleDeleteStudent(e, student.id)}
                  >
                    Delete
                  </Card.Link>
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

export default Students;
