import React, { useState } from "react";
import { Modal, Button, Container, Row, Col, Card } from "react-bootstrap";

const MdViewPat1 = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        View Patient
      </Button>

      <Modal show={showModal} onHide={handleClose} id="viewModal">
        <Modal.Header closeButton>
          <Modal.Title>Patient Profile</Modal.Title>
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
                      <strong>Patient Name :</strong> Natasya Rizki
                    </p>
                    <p className="mb-2">
                      <strong>Gender :</strong> Female
                    </p>
                    <p className="mb-2">
                      <strong>Age :</strong> 23
                    </p>
                    <p className="mb-2">
                      <strong>Phone Number :</strong> 123456789098
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

export default MdViewPat1
