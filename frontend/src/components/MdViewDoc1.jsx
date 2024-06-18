import React, { useState } from "react";
import { Modal, Button, Container, Row, Col, Card } from "react-bootstrap";
import MdDocImg1 from "../assets/img/dokter/dr.rina.jpg";

const MdViewDoc1 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        View Doctor
      </Button>

      <Modal show={showModal} onHide={handleClose} id="viewModal">
        <Modal.Header closeButton>
          <Modal.Title>Doctor Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "500px" }}>
          <Container>
            <Card className="shadow-sm border-2">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={4} className="text-center">
                    <div
                      className="position-relative"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "12px",
                      }}
                    >
                      <img
                        src={MdDocImg1}
                        alt="Doctor Image"
                        className="img-fluid"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "10px",
                          boxShadow: "5px -5px 3px rgba(0, 123, 255, 0.5)",
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={8}>
                    <p className="mb-2">
                      <strong>Name :</strong> Dr. Rina Sari, Sp.Pros
                    </p>
                    <p className="mb-2">
                      <strong>Phone Number :</strong> 123456789098
                    </p>
                    <p className="mb-2">
                      <strong>Specialist :</strong> Dental And Oral
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MdViewDoc1;
