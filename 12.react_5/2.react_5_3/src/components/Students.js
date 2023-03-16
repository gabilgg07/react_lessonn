import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, deleteStudent } from "../actions";
import CustomModal from "./CustomModal";
import { getDateFormat } from "../helpers/dateFormat";
import renderApi from "../api/renderApi";

const Students = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditBtn, setIsEditBtn] = useState(false);
  const [groups, setGroups] = useState([]);
  const [studentItem, setStudentItem] = useState({});
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());

    const getGroups = async () => {
      const { data } = await renderApi.get("/groups");

      setGroups(data);
    };

    getGroups();

    // eslint-disable-next-line
  }, []);

  const handleDeleteStudent = (e, id) => {
    e.preventDefault();
    dispatch(deleteStudent(id));
  };
  const handleEditStudent = (e, student) => {
    e.preventDefault();
    setIsEditBtn(true);
    setShowModal(true);
    setStudentItem(student);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddStudent = () => {
    setIsEditBtn(false);
    setShowModal(true);
  };

  return (
    <div>
      <Container className="mt-5">
        <h2 className="text-center text-secondary mb-3">Students</h2>
        <Row>
          <Col md={12} className="my-2">
            <Button
              onClick={handleAddStudent}
              variant="outline-info"
              className="add-student-btn"
            >
              Add student
            </Button>
          </Col>
          {students.map((student) => (
            <Col md={3} key={student.id} className="mb-2">
              <Card>
                <Card.Body>
                  <Card.Title>
                    {student.name} {student.surname}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {getDateFormat(student.birthday)}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Email:</strong> {student.email} <br />
                    <strong>Phone:</strong> {student.phone} <br />
                  </Card.Text>
                  <Card.Link
                    href="#"
                    onClick={(e) => handleEditStudent(e, student)}
                  >
                    Edit
                  </Card.Link>
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

          {showModal && (
            <CustomModal
              closeModal={handleCloseModal}
              item={studentItem}
              isEdit={isEditBtn}
              groups={groups}
              lastId={students[students.length - 1].id}
            />
          )}
        </Row>
        <hr />
      </Container>
    </div>
  );
};

export default Students;
