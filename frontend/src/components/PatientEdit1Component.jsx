import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PatientEdit1Component = () => {
  const [showModal, setShowModal] = useState(false);
  const [patientData, setPatientData] = useState({
    name: "Rizki Raihan",
    gender: "Laki Laki",
    address: "Kabupaten Tasikmalaya",
    birthDate: "2002-09-13",
    phoneNumber: "085720375593",
    email: "rizkiraihan381@gmail.com",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", patientData);
    handleClose();
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: "#3DC5CC", color: "white" }}
        onClick={handleShow}
      >
        <i className=""></i> Edit Patient
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Patient Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={patientData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                name="gender"
                value={patientData.gender}
                onChange={handleChange}
                required
              >
                <option>Laki Laki</option>
                <option>Perempuan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={patientData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBirthDate">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type="date"
                name="birthDate"
                value={patientData.birthDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={patientData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={patientData.email}
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

export default PatientEdit1Component;
