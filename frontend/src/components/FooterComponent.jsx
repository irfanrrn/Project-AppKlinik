
const FooterComponent = () => {
  return (
    <div>
         <footer className="footer">
            <div className="footer-top">
                <div className="container ">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="footer-widget">
                                <div className="footer-logo mb-3">
                                    <a href="index.html">
                                        <h3 className="logo-footer m-0 text-white">
                                            <i className="far fa-hospital me-3" /> GHEALTH
                                        </h3>
                                    </a>
                                </div>
                                <p>
                                Our Clinic, where you can get quality and trusted health care. 
                                We are a clinic committed to providing the best health services for the whole family.
                                </p>
                                <button className="btn btn-appo-foot">LOGIN/REGIST</button>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="footer-widget mt-4 mt-lg-0 d-flex align-items-start align-items-lg-center flex-column">
                                <h3 className="footer-title-use mb-3">Useful Links</h3>
                                <ul className="list">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Doctor's Schedule</a>
                                </li>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#"> Customer Reviews</a>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="footer-widget">
                                <h3 className="footer-title mb-3">Information</h3>
                                <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Kalisombo Street No 18, Salatiga, Central Java</p>
                                <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                                <p class="mb-2"><i class="fa fa-envelope me-3"></i>infoghealth@gmail.com</p>
                                <ul className="social-links">
                                    <li>
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-bar">
            <p>&copy; 2024 GHEALTH KLINIK . All rights reserved</p>
            </div>
        </footer>
    </div>
  )
}

export default FooterComponent