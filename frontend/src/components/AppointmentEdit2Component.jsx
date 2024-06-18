import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AppointmentEdit2Component = () => {
  const [showModal, setShowModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    appointmentDate: "2024-06-16",
    patientName: "Otto",
    status: "Will come",
    queue: 2,
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", appointmentData);
    handleClose();
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: "#3DC5CC", color: "white" }}
        onClick={handleShow}
      >
        <i className=""></i> Edit Appointment
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Appointment Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formAppointmentDate">
              <Form.Label>Appointment Date</Form.Label>
              <Form.Control
                type="date"
                name="appointmentDate"
                value={appointmentData.appointmentDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPatientName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                name="patientName"
                value={appointmentData.patientName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={appointmentData.status}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formQueue">
              <Form.Label>Queue</Form.Label>
              <Form.Control
                type="number"
                name="queue"
                value={appointmentData.queue}
                onChange={handleChange}
                required
              />
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

export default AppointmentEdit2Component;
