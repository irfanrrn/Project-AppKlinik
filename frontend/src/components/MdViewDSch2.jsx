import React, { useState } from "react";
import { Modal, Button, Container, Row, Col, Card } from "react-bootstrap";

const MdViewDSch2 = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        View Schedule
      </Button>

      <Modal show={showModal} onHide={handleClose} id="viewModal">
        <Modal.Header closeButton>
          <Modal.Title>Doctor Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "500px" }}>
          <Container>
            <Card className="shadow-sm border-2">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={1} className="text-center">
                  </Col>
                  <Col md={10}>
                    <p className="mb-2">
                      <strong>Doctor Name :</strong> Dr. Budi Santoso, Sp.A
                    </p>
                    <p className="mb-2">
                      <strong>Working Days :</strong> Monday - Friday
                    </p>
                    <p className="mb-2">
                      <strong>Working Hours :</strong> 08.00 AM - 16.00 PM
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

export default MdViewDSch2
