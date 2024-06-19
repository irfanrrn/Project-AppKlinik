import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUser } from "../configs/userSlice";

const NavbarComponent = () => {
  const user = useSelector(selectUser);
  return (
    <>
     <div
    className="container-fluid bg-white p-0"
  >
    <div className="row gx-0 d-none d-lg-flex">
      <div className="col-lg-7 px-5 text-start">
        <div className="h-100 d-inline-flex align-items-center me-4">
          <small className="fa fa-map-marker-alt text-primary me-2" />
          <small>Kalisombo Street No 18, Salatiga, Central Java</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center">
          <small className="far fa-clock text-primary me-2" />
          <small>Bussiness Hours: Mon-Fri 08.00AM-16.00PM</small>
        </div>
      </div>
      <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center">
          <NavLink
            className="btn btn-sm-square text-primary me-1"
            to=""
          >
            <i className="fab fa-facebook-f" />
          </NavLink>
          <NavLink
            className="btn btn-sm-square text-primary me-1"
            to=""
          >
            <i className="fab fa-twitter" />
          </NavLink>
          <NavLink
            className="btn btn-sm-square text-primary me-1"
            to=""
          >
            <i className="fab fa-linkedin-in" />
          </NavLink>
          <NavLink
            className="btn btn-sm-square text-primary me-0"
            to=""
          >
            <i className="fab fa-instagram" />
          </NavLink>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}


  {/* Navbar Start */}
  <nav className="navbar shadow navbar-expand-lg navbar-dark bg-primary p-0">
      <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h3 className="m-0 text-white">
            <i className="far fa-hospital me-3"></i>GHEALTH
          </h3>
        </NavLink>
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0 gap-4 gap-md-5 me-5">
        <NavLink to="/" className="nav-item nav-link py-md-4">
          Home
        </NavLink>
        <NavLink to="/doctorschedule" className="nav-item nav-link py-md-4">
            Doctor's Schedule
        </NavLink>
        <NavLink to="/aboutus" className="nav-item nav-link py-md-4">
        About Us
        </NavLink>
        
        {user.isLogin ? (
          <NavLink
          to="/formAppointment" className="btn text-white btn-warning btn-appo border-0 rounded-0 py-4 px-lg-5"
          >
            Appointment
          </NavLink>
        ) : (
          <NavLink
          to="/login" className="btn text-white btn-warning btn-appo border-0 rounded-0 py-4 px-lg-5"
        >
          LOGIN/REGIST
        </NavLink>
        )
        }
      </div>
      
    </div>
  </nav>
    </>
  );
};

export default NavbarComponent;
