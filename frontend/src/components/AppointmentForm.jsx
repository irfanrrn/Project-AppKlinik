import React, { useEffect, useState } from "react";
import axios from "axios";
import appImg2 from "../assets/img/appointment/doctor-app.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../configs/userSlice";
import CreatableSelect from 'react-select/creatable'
import toast from "react-hot-toast";

const AppointmentForm = () => {
    const user = useSelector(selectUser);
    const [doctors, setDoctors] = useState([]);
    const [patients, setPatients] = useState([]);
    const [fields, setFields] = useState({
        doctor_id: "",
        user_id: "",
        patient_id: "",
        day: "",
        name: "",
        gender: "",
        address: "",
        date_of_birth: "",
        phone_number: "",
        email: "",
    });

    const fetchDoctors = async () => {
        try {
            const res = await axios.get("/doctor");
            setDoctors(res.data.doctor_data);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchPatients = async () => {
        try {
            const res = await axios.get("/patient/by-user/" + user.user_id);
            setPatients(res.data.patient_data);
        } catch (err) {
            console.log(err);
        }
    };

    const changeHandle = (e) => {
      setFields({
          ...fields,
          [e.target.name]: e.target.value
      });
  }

    const submitHandle = async (e) => {
      e.preventDefault();
      try{
          const res = await axios.post('/appointment', fields);
          setFields({
              doctor_id: "",
              user_id: "",
              patient_id: "",
              day: "",
              name: "",
              gender: "",
              address: "",
              date_of_birth: "",
              phone_number: "",
              email: "",
          })
          toast.success(res.data.message, {position: 'bottom-right'});
      }catch(e){
          console.log(e);
      }
  }

    useEffect(() => {
        fetchDoctors();
        fetchPatients();
    }, []);

    return (
        <div id="form-appointment">
            <div className="page-header2">
                <h1 className="header-content">Appointment</h1>
                <nav className="header-content2">
                    <a className="page-1" href="/">
                        Home /
                    </a>
                    <a className="page-2" href="/formappointment">
                        Appointment /
                    </a>
                </nav>
            </div>
            <div className="container">
                <div className="content">
                    <div className="form-container-app">
                        <form onSubmit={submitHandle}>
                            <h2>Patient / User Data</h2>
                            <div className="row">
                                <div className="form-group mt-3 col-md-6">
                                    <label className={"form-label"}>
                                        Patient Name
                                    </label>
                                    <CreatableSelect
                                        isClearable={true}
                                        onChange={(e) => {
                                            if (e.__isNew__) {
                                                setFields({
                                                    ...fields,
                                                    name: e.value,
                                                    patient_id: "",
                                                    gender: "",
                                                    address: "",
                                                    date_of_birth: "",
                                                    phone_number: "",
                                                    email: "",
                                                });
                                            } else {
                                                console.log(patients);
                                                const patient = patients.find(
                                                    (p) =>
                                                        p.patient_id == e.value
                                                );
                                                console.log(patient);
                                                setFields({
                                                    ...fields,
                                                    patient_id: e.value,
                                                    name: patient.name,
                                                    gender: patient.gender,
                                                    address: patient.address,
                                                    date_of_birth: new Date(
                                                        patient.date_of_birth
                                                    )
                                                        .toISOString()
                                                        .slice(0, 10),
                                                    phone_number:
                                                        patient.phone_number,
                                                    email: patient.email,
                                                });
                                            }
                                        }}
                                        options={patients.map((patient) => ({
                                            value: patient.patient_id,
                                            label: patient.name,
                                        }))}
                                    />
                                </div>
                                <div className="form-group mt-3 col-md-6">
                                    <label htmlFor="gender">Gender</label>
                                    <input
                                        name="gender"
                                        required
                                        id="gender"
                                        onChange={changeHandle}
                                        value={fields.gender}
                                        disabled={fields.patient_id}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group mt-3 col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        onChange={changeHandle}
                                        value={fields.email}
                                        disabled={fields.patient_id}
                                        name="email"
                                        id="email"
                                        required
                                    />
                                </div>
                                <div className="form-group mt-3 col-md-6">
                                    <label htmlFor="phone_number">
                                        Phone Number
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        onChange={changeHandle}
                                        value={fields.phone_number}
                                        disabled={fields.patient_id}
                                        name="phone_number"
                                        id="phone_number"
                                        required
                                    />
                                </div>
                                <div className="form-group mt-3 col-md-6">
                                    <label htmlFor="date_of_birth">
                                        Date Of Birth
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={changeHandle}
                                        value={fields.date_of_birth}
                                        disabled={fields.patient_id}
                                        name="date_of_birth"
                                        id="date_of_birth"
                                        required
                                    />
                                </div>
                                <div className="form-group mt-3 col-md-6">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={changeHandle}
                                        value={fields.address}
                                        disabled={fields.patient_id}
                                        name="address"
                                        id="address"
                                        required
                                    />
                                </div>
                            </div>

                            <h2 className="my-4">Appointment Data</h2>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label htmlFor="doctor_id">Doctor</label>
                                    <select
                                        name="doctor_id"
                                        id="doctor_id"
                                        required
                                        value={fields.doctor_id}
                                        onChange={changeHandle}
                                        className="form-control"
                                    >
                                        <option value="" hidden></option>
                                        {doctors.map((doctor) => (
                                            <option
                                                key={doctor.doctor_id}
                                                value={doctor.doctor_id}
                                            >
                                                {doctor.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="day">Day</label>
                                    <select
                                        name="day"
                                        id="day"
                                        required
                                        value={fields.day}
                                        onChange={changeHandle}
                                        className="form-control"
                                    >
                                        <option value="" hidden></option>
                                        <option value="today">Today</option>
                                        <option value="tomorrow">
                                            Tomorrow
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex mt-3 justify-content-end">
                                <button
                                    type="button"
                                    className="btn btn-danger me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary text-white"
                                >
                                    <i className="fa fa-floppy-disk me-2"></i>
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentForm;
