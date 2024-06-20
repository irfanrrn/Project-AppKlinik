const AppointmentUpcComponent = () => {
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
        <a className="nav-button" href="/appointmenup">Upcoming</a>
        <a className="nav-button" href="/appointmentcom">Completed</a>
        <a className="nav-button" href="/appointmentcan">Canceled</a>
      </div>
      <hr className="hr-nav" />

      <section className="appoint-container">
      <div className="dcapp-card" data-status="upcoming">
          <div className="appoint-details">
              <div className="column left-column">
                <p><b>Name :</b> Natasya Rizki</p>
                <p><b>Email :</b> natnat15@gmail.com</p>
                <p><b>Date of Birth :</b> Friday, 12/01/2002</p>
                <p><b>Gender :</b> Female</p>
                <p><b>Phone :</b> 0812-1234-5678</p>
                <p><b>Address :</b> Kota Bandung</p>
              </div>
              <hr className="short-hr-all" />
              <div className="column right-column">
                <p><b>Doctor :</b> Dr. Agus Widodo, M.D.</p>
                <p><b>Department :</b> General Specialist</p>
                <p><b>Date :</b> Friday, 24/05/2024</p>
                <p><b>Queue :</b> GEN01</p>
                <div className="status-container">
                  <p><b>Status :</b></p>
                  <p className="status upcoming">Will Come</p>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentUpcComponent;
