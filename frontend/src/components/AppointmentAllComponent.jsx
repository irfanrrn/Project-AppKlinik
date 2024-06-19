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

        <div className="dcapp-card" data-status="completed">
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
              <p><b>Doctor :</b> Dr. Maya Putri, Sp.JP</p>
              <p><b>Department :</b> Heart Specialist</p>
              <p><b>Date :</b> Friday, 24/05/2024</p>
              <p><b>Queue :</b> HRT01</p>
              <div className="status-container">
                <p><b>Status :</b></p>
                <p className="status completed">Completed</p>
              </div>
              <div className="review-section">
                <div className="review-header">
                  <p className="review-order">Give your review :</p>
                  <div className="rating">
                    <input type="radio" id="star-1-maya" name="maya-star-radio" value="star-1" />
                    <label htmlFor="star-1-maya">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path pathLength="360"
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
                        </path>
                      </svg>
                    </label>
                    <input type="radio" id="star-2-maya" name="maya-star-radio" value="star-2" />
                    <label htmlFor="star-2-maya">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path pathLength="360"
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
                        </path>
                      </svg>
                    </label>
                    <input type="radio" id="star-3-maya" name="maya-star-radio" value="star-3" />
                    <label htmlFor="star-3-maya">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path pathLength="360"
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
                        </path>
                      </svg>
                    </label>
                    <input type="radio" id="star-4-maya" name="maya-star-radio" value="star-4" />
                    <label htmlFor="star-4-maya">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path pathLength="360"
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
                        </path>
                      </svg>
                    </label>
                    <input type="radio" id="star-5-maya" name="maya-star-radio" value="star-5" />
                    <label htmlFor="star-5-maya">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path pathLength="360"
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
                        </path>
                      </svg>
                    </label>
                  </div>
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
        </div>

        
        <div className="dcapp-card">
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
              <p><b>Doctor :</b> Dr. Budi Santoso, Sp.A</p>
              <p><b>Department :</b> Child Specialist</p>
              <p><b>Date :</b> Friday, 24/05/2024</p>
              <p><b>Queue :</b> CHL01</p>
              <div className="status-container">
                <p><b>Status :</b></p>
                <p className="status canceled">Canceled</p>
              </div>
              </div>
          </div>
        </div>

        <div className="dcapp-card" data-status="completed">
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
              <p><b>Doctor :</b> Dr. Budi Santoso, Sp.A</p>
              <p><b>Department :</b> Child Specialist</p>
              <p><b>Date :</b> Friday, 24/05/2024</p>
              <p><b>Queue :</b> CHL01</p>
              <div className="status-container">
                <p><b>Status :</b></p>
                <p className="status completed">Completed</p>
              </div>
              <div className="review-section">
                <div className="review-header">
                  <p className="review-order">Give your review :</p>
                  <div className="rating">
                    <input type="radio" id="star-1-budi" name="budi-star-radio" value="star-1" />
                    <label htmlFor="star-1-budi">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path pathLength="360"
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
                        </path>
                      </svg>
                    </label>
                    <input type="radio" id="star-2-budi" name="budi-star-radio" value="star-2" />
                    <label htmlFor="star-2-budi">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path pathLength="360"
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
                        </path>
                      </svg>
                    </label>
                    <input type="radio" id="star-3-budi" name="budi-star-radio" value="star-3" />
                    <label htmlFor="star-3-budi">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path pathLength="360"
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
                        </path>
                      </svg>
                    </label>
                    <input type="radio" id="star-4-budi" name="budi-star-radio" value="star-4" />
                    <label htmlFor="star-4-budi">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path pathLength="360"
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
                        </path>
                      </svg>
                    </label>
                    <input type="radio" id="star-5-budi" name="budi-star-radio" value="star-5" />
                    <label htmlFor="star-5-budi">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path pathLength="360"
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
                        </path>
                      </svg>
                    </label>
                  </div>
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
        </div>

      </section>
    </div>
  );
};

export default AppointmentAllComponent;
