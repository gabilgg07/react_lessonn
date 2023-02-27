import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Modal, Button } from "react-bootstrap";

const ModalElement = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const ModalPortal = () => {
  return ReactDOM.createPortal(
    <div className="container my-3">
      <ModalElement />
    </div>,
    document.querySelector("#modal")
  );
};

export default ModalPortal;
