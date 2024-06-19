import React, { useState } from 'react';
import axios from 'axios';
import appImg2 from "../assets/img/appointment/doctor-app.jpg";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: 'today',
    phone: '',
    dateOfBirth: '',
    gender: '',
    field: 'poli_umum',
    doctor: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedDoctor = formData.doctor;
    if (name === 'field') {
      switch (value) {
        case 'poli_umum':
          updatedDoctor = 'Dr. Agus Widodo, M.D';
          break;
        case 'psychology':
          updatedDoctor = 'Dr. Sinta Dewi, Sp.KJ';
          break;
        case 'child_specialist':
          updatedDoctor = 'Dr. Budi Santoso Sp.A';
          break;
        case 'heart_specialist':
          updatedDoctor = 'Dr. Maya Putri, Sp.JP';
          break;
        case 'dental_and_oral':
          updatedDoctor = 'Dr. Rina Sari, Sp.Pros';
          break;
        case 'obgyn':
          updatedDoctor = 'Dr. Andi Pratama, Sp.OG';
          break;
        default:
          updatedDoctor = '';
      }
    }

    setFormData({
      ...formData,
      [name]: value,
      doctor: updatedDoctor
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/appointments", formData)
      .then(response => {
        console.log(response.data);
        alert('Appointment created successfully!');
        // Add code to reset the form or display success message
      })
      .catch(error => {
        console.error('Error creating appointment:', error);
        alert('Error creating appointment: ' + error.message);
        // Add code to handle error and display error message
      });
  };

  return (
    <div id="form-appointment">
      <div className="page-header2">
        <h1 className="header-content">Appointment</h1>
        <nav className="header-content2">
          <a className="page-1" href="/">Home /</a>
          <a className="page-2" href="/formappointment">Appointment /</a>
        </nav>
      </div>
      <div className="container">
        <div className="content">
          <img src={appImg2} alt="Content Image" />
          <div className="form-container-app">
            <form onSubmit={handleSubmit}>
              <div className="horizontal-group">
                <div className="form-row">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@*.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label htmlFor="date">Select Day</label>
                  <select id="date" name="date" value={formData.date} onChange={handleChange}>
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="08xx-xxxx-xxx"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="gender">Gender</label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    placeholder="Male / Female"
                    value={formData.gender}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label htmlFor="field">Select Department</label>
                  <select id="field" name="field" value={formData.field} onChange={handleChange}>
                    <option value="poli_umum">General Specialist</option>
                    <option value="psychology">Psychology</option>
                    <option value="obgyn">OBGYN</option>
                    <option value="child_specialist">Child Specialist</option>
                    <option value="heart_specialist">Heart Specialist</option>
                    <option value="dental_and_oral">Dental And Oral</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="doctor">Doctor</label>
                  <input
                    type="text"
                    id="doctor"
                    name="doctor"
                    placeholder="Doctor1"
                    value={formData.doctor}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Your Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="button-group">
                <button className="button1" type="submit">Submit</button>
                <a className="button2" href="/appointmentAll">My Appointment</a>
              </div>
    </div>
  );
};

export default AppointmentForm;
