import aboutImg from "../assets/img/about-1.jpg";
import aboutImg1 from "../assets/img/feature.jpg";

const AboutUsComponent = () => {
  return (
    <div>
      <div
        className="container-fluid page-header5 py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb text-uppercase mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  About Us
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container9-xxl py-5">
        <div className="container10">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column">
                <img
                  className="img-fluid rounded w-100 align-self-end"
                  src={aboutImg}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">About Us</h1>
              <p>
                Welcome to our clinic, where you can get treatment quality and
                reliable health. We are a clinic which is committed to providing
                the best health services for all family. With a team of doctors
                and medical personnel professional, we are here to meet your
                health needs with friendly, fast and precise service.
              </p>
              <h1 className="mb-4">Our Vision</h1>
              <p className="mb-4">
                To become a trusted clinic that prioritizes health and community
                welfare through quality medical services and continuous
                innovation.
              </p>
              <p>
                <i
                  className="far fa-check-circle"
                  style={{ color: "#3DC5CC", marginRight: "0.5rem" }}
                ></i>
                Quality health services
              </p>
              <p>
                <i
                  className="far fa-check-circle"
                  style={{ color: "#3DC5CC", marginRight: "0.5rem" }}
                ></i>
                Only Qualified Doctors
              </p>
              <p>
                <i
                  className="far fa-check-circle"
                  style={{ color: "#3DC5CC", marginRight: "0.5rem" }}
                ></i>
                Medical Research Professional
              </p>
              <h1 className="mb-4">Your Health, Our Priority.</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid4  overflow-hidden my-5 px-lg-0 ">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 feature-text py-5 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div className="p-lg-5 ps-lg-20">
                <h1 className="text-white mb-4">Why Choose Us</h1>
                <p className="text-white mb-4 pb-2">
                  At the Clinic we are committed to providing service the best
                  and most comprehensive health for you and your family.
                </p>
                <div className="row g-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i
                          className="fa fa-user-md "
                          style={{ color: "#3DC5CC" }}
                        ></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Experience</p>
                        <h5 className="text-white mb-0">Doctor</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i
                          className="fa fa-check "
                          style={{ color: "#3DC5CC" }}
                        ></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Quality</p>
                        <h5 className="text-white mb-0">Service</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i
                          className="fa fa-comment-medical "
                          style={{ color: "#3DC5CC" }}
                        ></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Positive</p>
                        <h5 className="text-white mb-0">Consultation</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i
                          className="fa fa-headphones "
                          style={{ color: "#3DC5CC" }}
                        ></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Morning - Evening</p>
                        <h5 className="text-white mb-0">Support</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 pe-lg-0 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src={aboutImg1}
                  style={{ objectFit: "cover", left: 0 }}
                  alt="Feature"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
