import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const DoctorScheduleFormComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        + Add Data
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Doctor Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fromDay">
              <Form.Label>From Day</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
            <Form.Group controlId="untilDay">
              <Form.Label>Until Day</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
            <Form.Group controlId="startTime">
              <Form.Label>Start Time</Form.Label>
              <Form.Control type="time" required />
            </Form.Group>
            <Form.Group controlId="endTime">
              <Form.Label>End Time</Form.Label>
              <Form.Control type="time" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Room Number</Form.Label>
              <Form.Control type="password" placeholder="Enter room number" />
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

export default DoctorScheduleFormComponent;
