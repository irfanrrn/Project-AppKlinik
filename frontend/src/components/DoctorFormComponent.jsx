import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const DoctorFormComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    handleClose();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        + Add Data
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                required
              />
            </Form.Group>
            <Form.Group controlId="formSpecialization">
              <Form.Label>Specialization</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter specialization"
                required
              />
            </Form.Group>
            <Form.Group controlId="formQualification">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter qualification"
                required
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label> Image</Form.Label>
              <label className="form-label" for="Upload Image"></label>
              <input type="file" className="form-control" id="Upload Image" />
            </Form.Group>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                style={{ backgroundColor: "blue", color: "white" }}
              >
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DoctorFormComponent;
