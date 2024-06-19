import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";

const TablePatientComponent = () => {
    const [patients, setPatients] = useState([]);
    const [users, setUsers] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [errors, setErrors] = useState([]);
    const [modalDeleteShow, setModalDeleteShow] = useState(false);
    const [idDelete, setIdDelete] = useState(0);
    const [fields, setFields] = useState({
        name: "",
        gender: "",
        date_of_birth: "",
        phone_number: "",
    });

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        });
    };

    const handleDelete = async () => {
        try {
            let res = await axios.delete(`/patient/${idDelete}`);
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
            if (fields.patient_id) {
                res = await axios.put(
                    `/patient/${fields.patient_id}`,
                    fields
                );
            } else {
                res = await axios.post("/patient", fields);
            }
            fetchData();
            setModalShow(false);
            toast.success(res.data.message);
        } catch (error) {
            setErrors(error.response.data.message);
        }
    };

    useEffect(() => {
        fetchData();
        fetchUsers();
    }, []);

    useEffect(() => {
        if (!modalShow) {
            setFields({
                user_id: "",
                name: "",
                gender: "",
                date_of_birth: "",
                phone_number: "",
            });
        }
    }, [modalShow]);

    const fetchData = async () => {
        const response = await axios.get("/patient");
        setPatients(response.data.patient_data);
    };

    const fetchUsers = async () => {
        const response = await axios.get('/user');
        setUsers(response.data.user_data);
    }

    return (
        <div className="col" id="content-side">
            <div className="head-title">
                <div className="left">
                    <h1>Patients Data</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">Patient</a>
                        </li>
                        <li>
                            <i className="bx fa fa-chevron-right" />
                        </li>
                        <li>
                            <a className="active" href="/dashboard-admin">
                                Dashboard
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="table-responsive box-tabtab">
                <>
                    {/* Button trigger modal */}
                    <button
                        onClick={() => setModalShow(true)}
                        type="button"
                        className="btn btn-primary my-3 button-add"
                    >
                        <i className="fa fa-plus me-1"></i> Add Data
                    </button>
                    {/* Modal */}
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
                        <Modal.Header closeButton>Modal Patient</Modal.Header>

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
                                    <label htmlFor="user_id" className="col-form-label">
                                        User
                                    </label>
                                    <select name="user_id" id="user_id" className="form-control" onChange={handleChange} value={fields.user_id}>
                                        <option value="" hidden></option>
                                        {users.map((user) => (
                                            <option value={user.user_id}>{user.username}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="patient-name"
                                        className="col-form-label"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        onChange={handleChange}
                                        value={fields.name}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="gender"
                                        className="col-form-label"
                                    >
                                        Gender
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="gender"
                                        name="gender"
                                        onChange={handleChange}
                                        value={fields.gender}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="date-of-birth"
                                        className="col-form-label"
                                    >
                                        Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="date_of_birth"
                                        name="date_of_birth"
                                        onChange={handleChange}
                                        value={fields.date_of_birth}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="phone_number"
                                        className="col-form-label"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone_number"
                                        name="phone_number"
                                        onChange={handleChange}
                                        value={fields.phone_number}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="address"
                                        className="col-form-label"
                                    >
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        onChange={handleChange}
                                        value={fields.address}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="col-form-label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={fields.email}
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
                            <th scope="col">Patients Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <tr key={patient.patient_id}>
                                <th scope="row">{index + 1}</th>
                                <td>{patient.name}</td>
                                <td>{patient.gender}</td>
                                <td>{new Date(patient.date_of_birth).toISOString().slice(0, 10)}</td>
                                <td>{patient.phone_number}</td>
                                <td>
                                    <div className="button-container">
                                        
                                        <button
                                            type="button"
                                            className="btn btn-warning button-action"
                                            onClick={() => {
                                                setModalShow(true);
                                                setFields({...patient, date_of_birth: new Date(patient.date_of_birth).toISOString().slice(0, 10)});
                                            }}
                                        >
                                            <i className="fa fa-pen-to-square"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger button-action"
                                            onClick={() => {
                                                setModalDeleteShow(true);
                                                setIdDelete(patient.patient_id);
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
                        <Modal.Title>Modal Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleDelete}>
                            <p>Are you sure you want to delete this patient?</p>
                            <div className="d-flex justify-content-end">
                                <button
                                    className="btn btn-primary me-2 text-white"
                                    type="submit"
                                >
                                    <i className="fa fa-trash"></i> Delete
                                </button>
                                <button
                                    className="btn btn-danger me-2"
                                    type="button"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};
export default TablePatientComponent;
