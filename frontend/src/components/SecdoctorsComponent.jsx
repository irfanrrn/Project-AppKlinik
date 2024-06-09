import doctorImg1 from "../assets/img/doctor1.jpg";
import doctorImg2 from "../assets/img/doctor2.jpg";
import doctorImg3 from "../assets/img/doctor3.jpg";
import doctorImg4 from "../assets/img/doctor4.jpg";
import doctorImg5 from "../assets/img/doctor5.jpg";
import doctorImg6 from "../assets/img/doctor6.jpg";

const SecdoctorsComponent = () => {
    return (
        <div className="doctor-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="doctor-title">
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
                        <div className="doctor-single">
                            <div className="doctor-img">
                                <img src={doctorImg1} alt="" />
                            </div>
                            <div className="doctor-content">
                                <h5>
                                Dr. Rina Sari, Sp.Pros.
                                </h5>
                                <p>
                                Dental and Oral Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="doctor-single">
                            <div className="doctor-img">
                                <img src={doctorImg2} alt="" />
                            </div>
                            <div className="doctor-content">
                                <h5>
                                Dr. Budi Santoso, Sp.A.
                                </h5>
                                <p>Child Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="doctor-single">
                            <div className="doctor-img">
                                <img src={doctorImg3} alt="" />
                            </div>
                            <div className="doctor-content">
                                <h5>
                                Dr. Agus Widodo, M.D.
                                </h5>
                                <p>General Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="doctor-single">
                            <div className="doctor-img">
                                <img src={doctorImg4} alt="" />
                            </div>
                            <div className="doctor-content">
                                <h5>
                                Dr. Maya Putri, Sp.JP.
                                </h5>
                                <p>Heart Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="doctor-single">
                        <div className="doctor-img">
                            <img src={doctorImg5} alt="" />
                        </div>
                            <div className="doctor-content">
                                <h5>
                                Dr. Andi Pratama, Sp.OG.
                                </h5>
                                <p>OBGYN</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="doctor-single">
                        <div className="doctor-img">
                            <img src={doctorImg6} alt="" />
                        </div>
                            <div className="doctor-content">
                                <h5>
                                Dr. Sinta Dewi, Sp.KJ.
                                </h5>
                                <p>Psychology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SecdoctorsComponent;