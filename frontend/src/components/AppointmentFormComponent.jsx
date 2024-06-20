import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AppointmentFormComponent = () => {
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
          <Modal.Title>Add a new Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="Enter date" required />
            </Form.Group>
            <Form.Group controlId="formQueue">
              <Form.Label>Queue Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter queue number"
                required
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" required>
                <option>General Specialist</option>
                <option>Psychology</option>
                <option>Dental and Oral</option>
                <option>Heart Specialist</option>
                <option>Child Specialist</option>
                <option>OBGYN</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formRating">
              <Form.Label>Rating</Form.Label>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <React.Fragment key={star}>
                    <input
                      type="radio"
                      id={`star-${star}`}
                      name="star-radio"
                      value={star}
                      required
                    />
                    <label htmlFor={`star-${star}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                      </svg>
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </Form.Group>
            <Form.Group controlId="formReview">
              <Form.Label>Review</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your review"
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button
                variant=""
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

export default AppointmentFormComponent;
