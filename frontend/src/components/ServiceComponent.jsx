import service1 from "../assets/img/service1.jpg";
import service2 from "../assets/img/service2.jpg";
import service3 from "../assets/img/service3.jpg";
import service4 from "../assets/img/service4.jpg";
import service5 from "../assets/img/service5.jpg";
import service6 from "../assets/img/service6.jpg";

const ServiceComponent = () => {
    return (
        <div className="service-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-title">
                            <h1>OUR AVAILABLE SERVICES</h1>
                            <p>
                            By providing this service, we hope that your health care needs are met.
                            <br />
                            Your health is our priority.{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="service-single">
                            <div className="service-img">
                                <img src={service1} alt="" />
                            </div>
                            <div className="service-content">
                                <h3>
                                Dental and Oral Specialist
                                </h3>
                                <p>Our services include routine check-ups, teeth cleaning, fillings, root canal treatment, tooth extraction.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="service-single">
                            <div className="service-img">
                                <img src={service2} alt="" />
                            </div>
                            <div className="service-content">
                                <h3>
                                Child Specialist
                                </h3>
                                <p>We offer immunization services, 
                                    routine health check-ups, child disease management, 
                                    and growth and development consultations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="service-single">
                            <div className="service-img">
                                <img src={service3} alt="" />
                            </div>
                            <div className="service-content">
                                <h3>
                                General Specialist
                                </h3>
                                <p>Our services include medical consultations, 
                                    physical examinations, vaccinations, 
                                    and management of acute and chronic diseases.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="service-single">
                            <div className="service-img">
                                <img src={service4} alt="" />
                            </div>
                            <div className="service-content">
                                <h3>
                                Heart Specialist
                                </h3>
                                <p>Our services include cardiology consultation, 
                                    ECG examination, cardiac stress test, 
                                    hypertension and cholesterol management.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="service-single">
                        <div className="service-img">
                            <img src={service5} alt="" />
                        </div>
                            <div className="service-content">
                                <h3>
                                OBGYN
                                </h3>
                                <p>Providing health services for women, 
                                    including pregnancy, childbirth and post-natal check-ups.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="service-single">
                        <div className="service-img">
                            <img src={service6} alt="" />
                        </div>
                            <div className="service-content">
                                <h3>
                                Psychology
                                </h3>
                                <p>We offer individual counseling, 
                                    family therapy, treatment for mental 
                                    disorders such as depression, anxiety, and stress.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServiceComponent;