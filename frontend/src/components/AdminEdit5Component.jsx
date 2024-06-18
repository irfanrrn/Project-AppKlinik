import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AdminEdit5Component = () => {
  const [showModal, setShowModal] = useState(false);
  const [adminData, setAdminData] = useState({
    adminName: "raya lovina",
    email: "raraya12@gmail.com",
    password: "admin11234",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", adminData);
    handleClose();
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: "#3DC5CC", color: "white" }}
        onClick={handleShow}
      >
        <i className=""></i> Edit Admin
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Admin Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formAdminName">
              <Form.Label>Admin Name</Form.Label>
              <Form.Control
                type="text"
                name="adminName"
                value={adminData.adminName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={adminData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={adminData.password}
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

export default AdminEdit5Component;
