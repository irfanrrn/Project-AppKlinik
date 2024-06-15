import "../scss/dashboard/doctor.css";

const DoctorAppointmentComponent = () => {
  return (
    <div>
      <div className="container">
        <h1>Doctor Appointment</h1>
        <div className="appointment">
          <div className="doctor-card">
            <img
              src="./assets/compiled/dokter/Rina Sari.jpg"
              alt="Dr. Rina Sari"
            />
            <div className="doctor-info">
              <h2>Dr. Rina Sari, Sp.Pros</h2>
              <p>Dental And Oral Specialist</p>
            </div>
            <div className="appointment-count">8</div>
          </div>
          <div className="doctor-card">
            <img
              src="./assets/compiled/dokter/Rina Sari.jpg"
              alt="Dr. Maya Putri"
            />
            <div className="doctor-info">
              <h2>Dr. Maya Putri, Sp.JP</h2>
              <p>Heart Specialist</p>
            </div>
            <div className="appointment-count">10</div>
          </div>
          <div className="doctor-card">
            <img src="./assets/compiled/dokter/2.jpg" alt="Dr. Budi Santoso" />
            <div className="doctor-info">
              <h2>Dr. Budi Santoso, Sp.A</h2>
              <p>Child Specialist</p>
            </div>
            <div className="appointment-count">10</div>
          </div>
          <div className="doctor-card">
            <img src="./assets/compiled/dokter/5.jpg" alt="Dr. Andi Pratama" />
            <div className="doctor-info">
              <h2>Dr. Andi Pratama, Sp.OG</h2>
              <p>OBGYN</p>
            </div>
            <div className="appointment-count">8</div>
          </div>
          <div className="doctor-card">
            <img src="./assets/compiled/dokter/5.jpg" alt="Dr. Agus Widodo" />
            <div className="doctor-info">
              <h2>Dr. Agus Widodo, M.D</h2>
              <p>General Specialist</p>
            </div>
            <div className="appointment-count">12</div>
          </div>
          <div className="doctor-card">
            <img src="./assets/compiled/dokter/6.jpg" alt="Dr. Sinta Dewi" />
            <div className="doctor-info">
              <h2>Dr. Sinta Dewi, Sp.KJ</h2>
              <p>Psychology</p>
            </div>
            <div className="appointment-count">12</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointmentComponent;
