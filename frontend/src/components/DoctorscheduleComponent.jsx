import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DoctorscheduleComponent = () => {
    const navigate = useNavigate();
    const [doctors_schedules, setSchedules] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("/doctor_schedule");
            setSchedules(response.data.doctor_schedule_data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div
                className="container-fluid page-header3 py-5 mb-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container7 py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">
                        Doctor's Schedule
                    </h1>
                </div>
            </div>

            <section className="doctor-profile">
                {doctors_schedules.map((schedule, index) => (
                    <div className="profile-container">
                        <div className="profile-image">
                            <img src={schedule.image} alt="Dr. Agus Widodo" />
                        </div>
                        <div className="profile-details">
                            <h2>
                                {schedule.name}
                                <span className="fw-normal ms-2">
                                    ({schedule.specialization})
                                </span>
                            </h2>
                            <p className="fw-bold">Weekdays:</p>
                            <p>{schedule.from_day} - {schedule.until_day}</p>
                            <p className="fw-bold">Doctor's Working Hours:</p>
                            <p>{schedule.start_time} - {schedule.end_time}</p>
                            
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default DoctorscheduleComponent;
