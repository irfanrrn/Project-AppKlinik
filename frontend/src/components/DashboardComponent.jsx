import "../scss/dashboard/app.css";
import "../scss/dashboard/app-dark.css";
import "../scss/dashboard/iconly.css";
import "../scss/dashboard/app-dark.rtl.css";

// import React, { useEffect } from "react";

// import "../js/dark.js";
// import "../js/sidebar.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimneyMedical,
  faUserMd,
  faNotesMedical,
  faList,
  faHospitalUser,
  faUsers,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const DashboardComponent = () => {
  return (
    <div>
      <div id="app">
        <div id="sidebar">
          <div className="sidebar-wrapper active">
            <div className="sidebar-header position-relative">
              <div className="d-flex justify-content-between align-items-center">
                <div className="logo">
                  <a href="index.html">
                    <img src="./assets/compiled/svg/logo.svg" alt="Logo" />
                  </a>
                </div>
                <div className="theme-toggle d-flex gap-2 align-items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--system-uicons"
                    width="20"
                    height="20"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 21 21"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
                        opacity=".3"
                      ></path>
                      <g transform="translate(-210 -1)">
                        <path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path>
                        <circle cx="220.5" cy="11.5" r="4"></circle>
                        <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
                      </g>
                    </g>
                  </svg>
                  <div className="form-check form-switch fs-6">
                    <input
                      className="form-check-input me-0"
                      type="checkbox"
                      id="toggle-dark"
                      style={{ cursor: "pointer" }}
                    />
                    <label className="form-check-label"></label>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--mdi"
                    width="20"
                    height="20"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"
                    ></path>
                  </svg>
                </div>
                <div className="sidebar-toggler x">
                  <a href="#" className="sidebar-hide d-xl-none d-block">
                    <i className="bi bi-x bi-middle"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="sidebar-menu">
              <ul className="menu">
                <li className="sidebar-title">Menu</li>
                <li className="sidebar-item">
                  <a href="index.html" className="sidebar-link">
                    <FontAwesomeIcon icon={faHouseChimneyMedical} />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="data dokter.html" className="sidebar-link">
                    <FontAwesomeIcon icon={faUserMd} />
                    <span>Doctor</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    <FontAwesomeIcon icon={faNotesMedical} />
                    <span>Doctor's Schedule</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    <FontAwesomeIcon icon={faList} />
                    <span>Appointment</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    <FontAwesomeIcon icon={faHospitalUser} />
                    <span>Patient</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="form-layout.html" className="sidebar-link">
                    <FontAwesomeIcon icon={faUsers} />
                    <span>User</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Admin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="main">
          <header className="mb-3">
            <a href="#" className="burger-btn d-block d-xl-none">
              <i className="bi bi-justify fs-3"></i>
            </a>
          </header>
          <div className="page-heading">
            <h3>Welcome, Admin Name</h3>
          </div>
          <div className="page-content">
            <section className="row">
              <div className="col-12 col-lg-9">
                <div className="row">
                  <div className="col-6 col-lg-3 col-md-6">
                    <div className="card">
                      <div className="card-body px-4 py-4-5">
                        <div className="row">
                          <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                            <div className="stats-icon purple mb-2">
                              <FontAwesomeIcon icon={faNotesMedical} />
                            </div>
                          </div>
                          <div className="col-md-8 col-lg-12">
                            <h6 className="text-muted font-semibold">
                              Today's Appointment
                            </h6>
                            <h6 className="font-extrabold mb-0">60 patient</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 col-md-6">
                    <div className="card">
                      <div className="card-body px-4 py-4-5">
                        <div className="row">
                          <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                            <div className="stats-icon blue mb-2">
                              <FontAwesomeIcon icon={faUsers} />
                            </div>
                          </div>
                          <div className="col-md-8 col-lg-12">
                            <h6 className="text-muted font-semibold">
                              All Patients
                            </h6>
                            <h6 className="font-extrabold mb-0">
                              120 patients
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 col-md-6">
                    <div className="card">
                      <div className="card-body px-4 py-4-5">
                        <div className="row">
                          <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                            <div className="stats-icon green mb-2">
                              <FontAwesomeIcon icon={faHospitalUser} />
                            </div>
                          </div>
                          <div className="col-md-8 col-lg-12">
                            <h6 className="text-muted font-semibold">
                              Today's Patients
                            </h6>
                            <h6 className="font-extrabold mb-0">15 patients</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 col-md-6">
                    <div className="card">
                      <div className="card-body px-4 py-4-5">
                        <div className="row">
                          <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                            <div className="stats-icon red mb-2">
                              <FontAwesomeIcon icon={faNotesMedical} />
                            </div>
                          </div>
                          <div className="col-md-8 col-lg-12">
                            <h6 className="text-muted font-semibold">
                              General Patient
                            </h6>
                            <h6 className="font-extrabold mb-0">30 patients</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
