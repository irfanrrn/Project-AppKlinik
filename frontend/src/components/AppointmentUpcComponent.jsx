import appoupcImg from "../assets/img/appointment/dr-agus.png";

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
          <div className="dcapp-image">
            <img src={appoupcImg} alt="Dr. Agus Widodo, M.D." />
          </div>
          <div className="appoint-details">
            <p className="status upcoming">Upcoming</p>
            <h3>Dr. Agus Widodo, M.D.</h3>
            <p>General Specialist</p>
            <hr className="short-hr-upc" />
            <p><b>Date :</b> Friday, 24/05/2024</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentUpcComponent;
