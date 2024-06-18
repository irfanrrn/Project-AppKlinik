import React, { useState } from "react";
import { Modal, Button, Container, Row, Col, Card } from "react-bootstrap";

const MdViewAdmin1 = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        View Admin
      </Button>

      <Modal show={showModal} onHide={handleClose} id="viewModal">
        <Modal.Header closeButton>
          <Modal.Title>Admin Profile</Modal.Title>
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
                      <strong>Admin Name :</strong> Raya Lovina
                    </p>
                    <p className="mb-2">
                      <strong>Email :</strong> raraya12@gmail.com
                    </p>
                    <p className="mb-2">
                      <strong>Password :</strong> Admin11234
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

export default MdViewAdmin1
