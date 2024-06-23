


const AppointmentAllComponent = () => {
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
        <div className="dcapp-card" data-status="upcoming">
          <div className="dcapp-image">
            <img src={appointImg} alt="Dr. Agus Widodo, M.D." />
          </div>
          <div className="appoint-details">
            <p className="status upcoming">Upcoming</p>
            <h3>Dr. Agus Widodo, M.D.</h3>
            <p>General Specialist</p>
            <hr className="short-hr-all"/>
            <p><b>Date :</b> Friday, 24/05/2024</p>
          </div>
        </div>

        <div className="dcapp-card" data-status="completed">
          <div className="dcapp-image">
            <img src={appointImg2} alt="Dr. Maya Putri, Sp.JP." />
          </div>
          <div className="appoint-details">
            <p className="status completed">Completed</p>
            <h3>Dr. Maya Putri, Sp.JP.</h3>
            <p>Heart Specialist</p>
            <hr className="short-hr-all"/>
            <p><b>Date :</b> Monday, 20/05/2024</p>
            <div className="review-section">
              <p className="review-order">Give your review :</p>
              <div className="rating">
                <input type="radio" id="star-1-may" name="may-star-radio" value="star-1" />
                <label htmlFor="star-1-may">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                  </svg>
                </label>
                <input type="radio" id="star-2-may" name="may-star-radio" value="star-2" />
                <label htmlFor="star-2-may">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                  </svg>
                </label>
                <input type="radio" id="star-3-may" name="may-star-radio" value="star-3" />
                <label htmlFor="star-3-may">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                  </svg>
                </label>
                <input type="radio" id="star-4-may" name="may-star-radio" value="star-4" />
                <label htmlFor="star-4-may">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                  </svg>
                </label>
                <input type="radio" id="star-5-may" name="may-star-radio" value="star-5" />
                <label htmlFor="star-5-may">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                  </svg>
                </label>
              </div>
              <form className="review-form">
                <input type="text" className="review-input" placeholder="Enter your review" />
                <div className="review-actions">
                  <button className="submit-review-btn" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="dcapp-card" data-status="canceled">
          <div className="dcapp-image">
            <img src={appointImg1} alt="Dr. Budi Santoso, Sp.A." />
          </div>
          <div className="appoint-details">
            <p className="status canceled">Canceled</p>
            <h3>Dr. Budi Santoso, Sp.A.</h3>
            <p>Child Specialist</p>
            <hr className="short-hr-all"/>
            <p><b>Date :</b> Thursday, 17/05/2024</p>
          </div>
        </div>

        <div className="dcapp-card" data-status="completed">
          <div className="dcapp-image">
            <img src={appointImg1} alt="Dr. Budi Santoso, Sp.A." />
          </div>
          <div className="appoint-details">
            <p className="status completed">Completed</p>
            <h3>Dr. Budi Santoso, Sp.A.</h3>
            <p>Child Specialist</p>
            <hr className="short-hr-all"/>
            <p><b>Date :</b> Tuesday, 15/05/2024</p>
            <div className="review-section">
              <p className="review-order">Give your review :</p>
              <div className="rating">
                <input type="radio" id="star-1-bud" name="bud-star-radio" value="star-1" />
                <label htmlFor="star-1-bud">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                  </svg>
                </label>
                <input type="radio" id="star-2-bud" name="bud-star-radio" value="star-2" />
                <label htmlFor="star-2-bud">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                  </svg>
                </label>
                <input type="radio" id="star-3-bud" name="bud-star-radio" value="star-3" />
                <label htmlFor="star-3-bud">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                  </svg>
                </label>
                <input type="radio" id="star-4-bud" name="bud-star-radio" value="star-4" />
                <label htmlFor="star-4-bud">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                  </svg>
                </label>
                <input type="radio" id="star-5-bud" name="bud-star-radio" value="star-5" />
                <label htmlFor="star-5-bud">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                  </svg>
                </label>
              </div>
              <form className="review-form">
                <input type="text" className="review-input" placeholder="Enter your review" />
                <div className="review-actions">
                  <button className="submit-review-btn" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentAllComponent;
