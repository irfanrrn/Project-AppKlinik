import axios from "axios";
import { useEffect, useState } from "react";

const MyAppointmentComponent = () => {

  const [appointments, setAppointments] = useState([]);

  const fetchData = async () => {
    try {
        const response = await axios.get("/appointment");
        setAppointments(response.data.appointment_data);
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="page-header">
        <h1 className="header-content">My Appointment</h1>
        <nav className="header-content2">
          <a className="page-1" href="/">Home /</a>
          <a className="page-2" href="/formappointment">Appointment /</a>
          <a className="page-3" href="/appointmentall">My Appointment</a>
        </nav>
      </div>
      
      <section className="appoint-container">
      {appointments.map((appointment, index) => (
        <div className="dcapp-card">
          <div className="dcapp-image">
            <img src={appointment.image} alt="Dr. Agus Widodo, M.D." />
          </div>
          <div className="appoint-details">
            <p className="status upcoming">{appointment.status}</p>
              <h3>{appointment.doctor_name} <span> ({appointment.specialization})</span></h3>
              <p>For patients : {appointment.patient_name}</p>
              <p>No. Queue : {appointment.queue_no}</p>
            <hr className="short-hr-all"/>
            <p><b>Date :</b> {appointment.date}</p>
            {/* <div className="review-actions">
              <a className=" btn btn-primary text-white" type="button">Give a review here</a>
            </div> */}
          </div>
        </div>
      ))}

        {/* <div className="dcapp-card" data-status="completed">
          <div className="dcapp-image">
            <img src="" alt="Dr. Maya Putri, Sp.JP." />
          </div>
          <div className="appoint-details">
            <p className="status completed">Completed</p>
            <h3>Dr. Maya Putri, Sp.JP.</h3>
            <p>Heart Specialist</p>
            <hr className="short-hr-all"/>
            <p><b>Date :</b> Monday, 20/05/2024</p>
                
          </div>
        </div> */}

        {/*<div className="dcapp-card" data-status="canceled">
          <div className="dcapp-image">
            <img src="" alt="Dr. Budi Santoso, Sp.A." />
          </div>
          <div className="appoint-details">
            <p className="status canceled">Canceled</p>
            <h3>Dr. Budi Santoso, Sp.A.</h3>
            <p>Child Specialist</p>
            <hr className="short-hr-all"/>
            <p><b>Date :</b> Thursday, 17/05/2024</p>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default MyAppointmentComponent;
