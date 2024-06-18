import React, { useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import dokterImg from "../assets/img/dokter/dr.agus.jpg";

const DoctorEdit3Component = () => {
  const [showModal, setShowModal] = useState(false);
  const [doctorData, setDoctorData] = useState({
    name: "Dr. Agus Widodo, M.D",
    id: "123456789098",
    specialty: "General Specialist",
    description: "Medical Doctor",
    image: "dokterImg.jpg", // Initial image source
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleFileChange = (e) => {
    setDoctorData({
      ...doctorData,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", doctorData);
    handleClose();
  };
  return (
    <div>
      <Button
        style={{ backgroundColor: "#3DC5CC", color: "white" }}
        onClick={handleShow}
      >
        <i className="bi bi-pencil"></i> Edit add Doctor
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Doctor </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={doctorData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formID">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={doctorData.id}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formSpecialty">
              <Form.Label>Specialization</Form.Label>
              <Form.Control
                type="text"
                name="specialty"
                value={doctorData.specialty}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={doctorData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Image src={dokterImg} alt="Doctor" thumbnail className="mb-3" />
              <Form.Control
                type="file"
                name="image"
                onChange={handleFileChange}
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

export default DoctorEdit3Component;
