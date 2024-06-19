import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";

const TableScheduleComponent = () => {
    const [doctors_schedules, setSchedules] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [errors, setErrors] = useState([]);
    const [modalDeleteShow, setModalDeleteShow] = useState(false);
    const [idDelete, setIdDelete] = useState(0);
    const [doctors, setDoctors] = useState([]);
    const [fields, setFields] = useState({
        doctor_id: "",
        from_day: "",
        until_day: "",
        start_time: "",
        end_time: "",
        room_number: "",
    });

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        });
    };

    const handleDelete = async () => {
        try {
            let res = await axios.delete(`/doctor_schedule/${idDelete}`);
            setModalDeleteShow(false);
            fetchData();
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res;
            if (fields.schedule_id) {
                res = await axios.put(
                    `/doctor_schedule/${fields.schedule_id}`,
                    fields
                );
            } else {
                res = await axios.post("/doctor_schedule", fields);
            }
            fetchData();
            setModalShow(false);
            toast.success(res.data.message);
        } catch (error) {
            setErrors(error.response.data.error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get("/doctor_schedule");
            setSchedules(response.data.doctor_schedule_data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchDoctors = async () => {
        try {
            const response = await axios.get("/doctor");
            setDoctors(response.data.doctor_data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchDoctors();
    }, []);

    useEffect(() => {
        if (!modalShow) {
            setFields({
                doctor_id: "",
                from_day: "",
                until_day: "",
                start_time: "",
                end_time: "",
                room_number: "",
            });
            setErrors([]);
        }
    }, [modalShow]);

    return (
        <div className="col" id="content-side">
            <div className="head-title">
                <div className="left">
                    <h1>Doctor Schedule Data</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">Doctor Schedule</a>
                        </li>
                        <li>
                            <i className="bx fa fa-chevron-right" />
                        </li>
                        <li>
                            <a className="active" href="#">
                                Dashboard
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="table-responsive box-tabtab">
                <>
                    <button
                        onClick={() => setModalShow(true)}
                        type="button"
                        className="btn btn-primary my-3 button-add"
                    >
                        <i className="fa fa-plus me-1"></i> Add Data
                    </button>
                    <Modal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        scrollable={true}
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex={-1}
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                    >
                        <Modal.Header closeButton>
                            Modal Doctor Schedule
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleSubmit}>
                                {errors.length > 0 && (
                                    <div
                                        className="alert alert-danger"
                                        role="alert"
                                    >
                                        <ul>
                                            {errors.map((error, index) => (
                                                <li
                                                    key={index}
                                                    className="text-danger"
                                                >
                                                    {error.msg}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className="mb-3">
                                    <label
                                        htmlFor="doctor-name"
                                        className="col-form-label"
                                    >
                                        Name
                                    </label>
                                    <select
                                        type="text"
                                        className="form-control"
                                        id="doctor_id"
                                        name="doctor_id"
                                        onChange={handleChange}
                                        value={fields.doctor_id}
                                    >
                                        {fields.schedule_id ? (
                                            <option value={fields.doctor_id}>
                                                {
                                                    doctors.find(
                                                        (doctor) =>
                                                            doctor.doctor_id ===
                                                            fields.doctor_id
                                                    ).name
                                                }
                                            </option>
                                        ) : (
                                            <>
                                                <option value="">
                                                    -- Select --
                                                </option>
                                                {doctors
                                                    .filter(
                                                        (doctor) =>
                                                            !doctors_schedules.find(
                                                                (schedule) =>
                                                                    schedule.doctor_id ===
                                                                    doctor.doctor_id
                                                            )
                                                    )
                                                    .map((doctor, index) => (
                                                        <option
                                                            key={index}
                                                            value={
                                                                doctor.doctor_id
                                                            }
                                                        >
                                                            {doctor.name}
                                                        </option>
                                                    ))}
                                            </>
                                        )}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="from_day"
                                        className="col-form-label"
                                    >
                                        From Day
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="from_day"
                                        name="from_day"
                                        onChange={handleChange}
                                        value={fields.from_day}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="until_day"
                                        className="col-form-label"
                                    >
                                        Until Day
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="until_day"
                                        name="until_day"
                                        onChange={handleChange}
                                        value={fields.until_day}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="start_time"
                                        className="col-form-label"
                                    >
                                        Start Time
                                    </label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        id="start_time"
                                        name="start_time"
                                        onChange={handleChange}
                                        value={fields.start_time}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="end_time"
                                        className="col-form-label"
                                    >
                                        End Time
                                    </label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        id="end_time"
                                        name="end_time"
                                        onChange={handleChange}
                                        value={fields.end_time}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="room_number"
                                        className="col-form-label"
                                    >
                                        Room Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="room_number"
                                        name="room_number"
                                        onChange={handleChange}
                                        value={fields.room_number}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
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
                        </Modal.Body>
                    </Modal>
                </>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Day</th>
                            <th scope="col">Time</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors_schedules.map((schedule, index) => (
                            <tr key={schedule.schedule_id}>
                                <th scope="row">{index + 1}</th>
                                <td>{schedule.name}</td>
                                <td>{schedule.day}</td>
                                <td>{schedule.time}</td>
                                <td>
                                    <div className="button-container">
                                        <button
                                            className="btn btn-warning button-action"
                                            type="button"
                                            onClick={() => {
                                                setModalShow(true);
                                                setFields(schedule);
                                            }}
                                        >
                                            <i className="fa fa-pen-to-square"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger button-action"
                                            onClick={() => {
                                                setModalDeleteShow(true);
                                                setIdDelete(
                                                    schedule.schedule_id
                                                );
                                            }}
                                        >
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Modal
                    show={modalDeleteShow}
                    onHide={() => setModalDeleteShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Schedule</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to delete this schedule?</p>
                        <div className="d-flex justify-content-end">
                            <button
                                className="btn btn-primary me-2 text-white"
                                onClick={handleDelete}
                            >
                                <i className="fa fa-trash"></i> Delete
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => setModalDeleteShow(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};
export default TableScheduleComponent;
