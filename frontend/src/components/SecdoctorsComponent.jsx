import { useEffect, useState } from "react";
import axios from "axios";

const SecdoctorsComponent = () => {

    const [doctors, setDoctors] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("/doctor");
            setDoctors(response.data.doctor_data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="doctor-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="doctor-title">
                            <h1>OUR AVAILABLE DOCTORS</h1>
                            <p>
                            By providing this service, we hope that your health care needs are met.
                            <br />
                            Your health is our priority.{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                {doctors.map((doctor, index) => (
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="doctor-single">
                            <div className="doctor-img">
                                <img src={doctor.image} alt="Dr. Agus Widodo" />
                            </div>
                            <div className="doctor-content">
                                <h5>
                                {doctor.name}
                                </h5>
                                <p>
                                {doctor.specialization}
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <hr />
                        <a href="/Doctorschedule" className="btn btn-secdoc">
                            See Doctor's Schedule
                        </a>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SecdoctorsComponent;