import appImg2 from "../assets/img/appointment/doctor-app.jpg";

const AppointmentForm = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="header-content">Appointment</h1>
        <nav className="header-content2">
          <a className="page-1" href="/">Home /</a>
          <a className="page-2" href="/formappointment">Appointment /</a>
        </nav>
      </div>
      <div className="container">
        <div className="content">
          <img src={appImg2} alt="Content Image" />
          <div className="form-container">
            <form>
              <div className="horizontal-group">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@***.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label htmlFor="date">Select Date</label>
                  <input type="date" id="date" name="date" />
                </div>
                <div>
                  <label htmlFor="phone">No. Hp</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="08xx-xxxx-xxx"
                  />
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label htmlFor="field">Select Department</label>
                  <select id="field" name="field">
                    <option value="poli_umum">General Specialist</option>
                    <option value="psychology">Psychology</option>
                    <option value="obgyn">OBGYN</option>
                    <option value="child_specialist">Child Specialist</option>
                    <option value="heart_specialist">Heart Specialist</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="doctor">Doctor</label>
                  <input
                    type="text"
                    id="doctor"
                    name="doctor"
                    placeholder="Doctor1"
                  />
                </div>
              </div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Convey your message here"
              ></textarea>
              <div className="button-group">
                <button className="button1" type="submit">Submit</button>
                <a className="button2" href="#">My Appointment</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentForm