const NavbarComponent = () => {
  return (
    <div>
      <div
        className="container-fluid bg-white p-0 wow fadeIn"
        data-wow-delay="0.1s">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small
                className="fa fa-map-marker-alt me-2 text-primary"
                id="icons-light"
              />
              <small>Kalisombo Street No 18, Salatiga, Central Java</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small
                className="far fa-clock me-2 text-primary"
                id="icons-light"
              />
              <small>Bussiness Hours: Mon-Fri 08.00AM-16.00PM</small>
            </div>
          </div>
          <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center">
                    <a class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-sm-square rounded-circle bg-white text-primary me-0" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
      </div>
      <nav
        class="navbar navbar-expand-lg bg-primary sticky-top p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a
          href=" "
          class="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h3 class="m-0 text-white">
            <i class="far fa-hospital me-3"></i>GHEALTH
          </h3>
        </a>
        <button
          type="button"
          class="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0 gap-5 me-5">
            <a href="index.html" class="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" class="nav-item nav-link">
              Doctor's Schedule
            </a>
            <a href="service.html" class="nav-item nav-link">
              About Us
            </a>
            <a href="contact.html" class="nav-item nav-link">
              Customer Reviews
            </a>
          </div>
          <a
            href=""
            class="btn text-white btn-warning btn-appo border-0 rounded-0 py-4 px-lg-5 d-none d-lg-block"
          >
            LOGIN/REGIST
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
