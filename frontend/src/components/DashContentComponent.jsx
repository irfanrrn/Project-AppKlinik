import {useEffect, useState} from "react";
import axios from "axios";

const DashContentComponent = () => {
    const [dashboardData, setDashboardData] = useState({
        "number_of_appointment": 0,
        "number_will_come": 0,
        "number_completed": 0,
        "patientCountByDoctors": []
    });

    const fetchData = async () => {
        const res = await axios.get('/dashboard');
        setDashboardData(res.data);
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="col" id="content-side">
            <div className="head-title">
                <div className="left">
                    <h1>Dashboard</h1>
                </div>
            </div>


            <ul className="box-info">
                <li>
                    <i className="bx fa fa-notes-medical"/>
                    <span className="text">
                    <p>Today's Appointment</p>
                    <h3>{dashboardData.number_of_appointment} <span className="span-patient">Patient</span></h3>
                </span>
                </li>
                <li>
                    <i className="bx fa fa-notes-medical"/>
                    <span className="text">
                    <p>Appointment Remaining</p>
                    <h3>{dashboardData.number_will_come} <span className="span-patient">Patient</span></h3>
                </span>
                </li>
                <li>
                    <i className="bx fa fa-notes-medical"/>
                    <span className="text">
                    <p>Appointment Completed</p>
                    <h3>{dashboardData.number_completed} <span className="span-patient">Patient</span></h3>
                </span>
                </li>
            </ul>


            <div className="doc-appo-data">
                <div className="doc-appoint">
                    <div className="head">
                        <h3>Doctor Appointment</h3>
                        <i className="bx bx-search"/>
                        <i className="bx bx-filter"/>
                    </div>
                    <ul className="box-doc">
                        {dashboardData.patientCountByDoctors.map((doctor, index) => (
                            <li key={index}>
                                <img src={doctor.image} alt=""/>

                                <span className="text1">
                            <h3 className="doc-name">{doctor.name}</h3>
                            <p>{doctor.specialization}</p>
                        </span>
                                <span className="text2">
                            <h3 className="num-patient">{doctor.patientCount}</h3>
                            <span className="span-patient">Patient</span>
                        </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default DashContentComponent;