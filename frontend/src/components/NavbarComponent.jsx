
const NavbarComponent = () => {
  return (
    <div>
        <div class="container-fluid bg-white p-0 wow fadeIn" data-wow-delay="0.1s">
            <div class="row gx-0 d-none d-lg-flex">
                <div class="col-lg-7 px-5 text-start">
                    <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                        <small class="fa fa-map-marker-alt me-2" id="icons-light"></small>
                        <small>123 Street, Salatiga, Central Java</small>
                    </div>
                    <div class="h-100 d-inline-flex align-items-center py-3">
                        <small class="far fa-clock me-2" id="icons-light"></small>
                        <small>Bussiness Hours: Mon-Fri 08.00AM-16.00PM</small>
                    </div>
                </div>
                <div class="col-sm-5 text-end">
                    <a href="" class="btn btn-log rounded-0 py-3">Login/Regist</a>
                </div>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light sticky-top p-0 wow fadeIn" id="navnav" data-wow-delay="0.1s">
            <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h3 class="m-0 text-white"><i class="far fa-hospital me-3"></i>GHEALTH</h3>
            </a>
            <div class="collapse navbar-collapse text-white" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-5 p-lg-0">
                    <a href="index.html" class="nav-item nav-link active mx-4">Home</a>
                    <a href="about.html" class="nav-item nav-link mx-4">doctor's schedule</a>
                    <a href="service.html" class="nav-item nav-link mx-4">about us</a>
                    <a href="contact.html" class="nav-item nav-link mx-4">customer reviews</a>
                </div>
            </div>
            <div>
            <a href="" class="btn btn-appo rounded-0 py-4 px-lg-5 d-none d-lg-block text-white">Appointment</a>
            </div>
        </nav>
    </div>
  )
}

export default NavbarComponent