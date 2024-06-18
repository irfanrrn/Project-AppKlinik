import React, { useState } from "react";
import { Modal, Button, Container, Row, Col, Card } from "react-bootstrap";

const MdViewAppointment4 = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        View Appointment
      </Button>

      <Modal show={showModal} onHide={handleClose} id="viewModal">
        <Modal.Header closeButton>
          <Modal.Title>Appointment Data</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "500px" }}>
          <Container>
            <Card className="shadow-sm border-2">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={2} className="text-center">
                  </Col>
                  <Col md={8}>
                    <p className="mb-2">
                      <strong>Appointment Date :</strong> 31/05/2024
                    </p>
                    <p className="mb-2">
                      <strong>Patient Name :</strong> Natasya Rizki
                    </p>
                    <p className="mb-2">
                      <strong>Status :</strong> General
                    </p>
                    <p className="mb-2">
                      <strong>Queue :</strong> GEN01
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default MdViewAppointment4
