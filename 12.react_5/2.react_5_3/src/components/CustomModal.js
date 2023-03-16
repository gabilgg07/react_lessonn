import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { addStudent, editStudent } from "../actions";
import { useDispatch } from "react-redux";

const CustomModal = ({ closeModal, item, isEdit, groups, lastId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    surname: "",
    birthday: "",
    email: "",
    phone: "",
    groupId: "",
  });

  useEffect(() => {
    if (isEdit) {
      setFormData({
        id: item.id,
        name: item.name,
        surname: item.surname,
        birthday: item.birthday,
        email: item.email,
        phone: item.phone,
        groupId: item.groupId,
      });
    }

    // eslint-disable-next-line
  }, []);

  const handleChangeInp = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleActionStudent = () => {
    closeModal();
    if (isEdit) {
      dispatch(editStudent(formData));
    } else {
      // let data = { ...formData, id: ++lastId };
      dispatch(addStudent({ ...formData, id: ++lastId }));
    }
  };

  return (
    <div>
      <Modal show={true} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Update" : "Add"} student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="text"
              name="name"
              className=""
              placeholder="name"
              value={formData.name}
              onChange={(e) => handleChangeInp(e, "name")}
            />
            <Form.Control
              type="text"
              name="surname"
              className=" my-3"
              placeholder="surname"
              value={formData.surname}
              onChange={(e) => handleChangeInp(e, "surname")}
            />
            <Form.Control
              type="date"
              name="birthday"
              className=" my-3"
              placeholder="birthday"
              value={formData.birthday}
              onChange={(e) => handleChangeInp(e, "birthday")}
            />
            <Form.Control
              type="email"
              name="email"
              className=" my-3"
              placeholder="email"
              value={formData.email}
              onChange={(e) => handleChangeInp(e, "email")}
            />
            <Form.Control
              type="text"
              name="phone"
              className=" my-3"
              placeholder="phone"
              value={formData.phone}
              onChange={(e) => handleChangeInp(e, "phone")}
            />
            <Form.Select
              value={formData.groupId}
              onChange={(e) => handleChangeInp(e, "groupId")}
            >
              <option>Select Group</option>
              {Boolean(groups.length > 0) &&
                groups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.name}
                  </option>
                ))}
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleActionStudent}>
            {isEdit ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomModal;
