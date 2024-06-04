
const NavbarComponent = () => {
  return (
    <div>
        <div className="container-fluid bg-white p-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                    <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-map-marker-alt me-2" id="icons-light" />
                    <small>Kalisombo Street No 18, Salatiga, Central Java</small>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center py-3">
                    <small className="far fa-clock me-2" id="icons-light" />
                    <small>Bussiness Hours: Mon-Fri 08.00AM-16.00PM</small>
                    </div>
                </div>
                <div className="col-sm-5 text-end">
                    <a href="" className="btn btn-log rounded-0 py-3">LOGIN/REGIST</a>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top p-0 wow fadeIn" id="navnav" data-wow-delay="0.1s">
            <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h3 className="m-0 text-white">
                <i className="far fa-hospital me-3" /> GHEALTH
            </h3>
            </a>
            <div className="collapse navbar-collapse text-white" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-5 p-lg-0">
                    <a href="index.html" className="nav-item nav-link active mx-4">
                    Home
                    </a>
                    <a href="about.html" className="nav-item nav-link mx-4">
                    doctor's schedule
                    </a>
                    <a href="service.html" className="nav-item nav-link mx-4">
                    about us
                    </a>
                    <a href="contact.html" className="nav-item nav-link mx-4">
                    customer reviews
                    </a>
                </div>
            </div>
            <div>
            <a href="" className="btn btn-appo rounded-0 py-4 px-lg-5 d-none d-lg-block text-white">Appointment</a>
            </div>
        </nav>
    </div>
  )
}

export default NavbarComponent