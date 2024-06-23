

const AppointmentCanComponent = () => {
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
    
      <div className="button-container">
        <a className="nav-button" href="/appointmentall">All</a>
        <a className="nav-button" href="/appointmentup">Upcoming</a>
        <a className="nav-button" href="/appointmentcom">Completed</a>
        <a className="nav-button" href="/appointmentcan">Canceled</a>
      </div>
      <hr className="hr-nav"/>

      <section className="appoint-container">
        <div className="dcapp-card">
          <div className="dcapp-image">
            <img src={appcanImg} alt="Dr. Budi Santoso, Sp.A., Child Specialist" />
          </div>
          <div className="appoint-details">
            <p className="status canceled">Canceled</p>
            <h3>Dr. Budi Santoso, Sp.A.</h3>
            <p>Child Specialist</p>
            <hr className="short-hr-all"/>
            <p><b>Date :</b> Thursday, 17/05/2024</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentCanComponent;
