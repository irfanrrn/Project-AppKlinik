import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const DoctorScheduleEdit4Component = () => {
  const [showModal, setShowModal] = useState(false);
  const [scheduleData, setScheduleData] = useState({
    fromDay: "Senin",
    untilDay: "Jumat",
    startTime: "08:00:00",
    endTime: "11:30:00",
    roomNumber: "B1",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScheduleData({ ...scheduleData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", scheduleData);
    handleClose();
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: "#3DC5CC", color: "white" }}
        onClick={handleShow}
      >
        <i className=""></i> Edit Schedule
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Doctor Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fromDay">
              <Form.Label>From Day</Form.Label>
              <Form.Select
                name="fromDay"
                value={scheduleData.fromDay}
                onChange={handleChange}
                required
              >
                <option>Senin</option>
                <option>Selasa</option>
                <option>Rabu</option>
                <option>Kamis</option>
                <option>Jumat</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="untilDay">
              <Form.Label>Until Day</Form.Label>
              <Form.Select
                name="untilDay"
                value={scheduleData.untilDay}
                onChange={handleChange}
                required
              >
                <option>Senin</option>
                <option>Selasa</option>
                <option>Rabu</option>
                <option>Kamis</option>
                <option>Jumat</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="startTime">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="time"
                name="startTime"
                value={scheduleData.startTime}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="endTime">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="time"
                name="endTime"
                value={scheduleData.endTime}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="roomNumber">
              <Form.Label>Room Number</Form.Label>
              <Form.Control
                type="text"
                name="roomNumber"
                placeholder="Enter room number"
                value={scheduleData.roomNumber}
                onChange={handleChange}
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

export default DoctorScheduleEdit4Component;
