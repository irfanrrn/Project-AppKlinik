
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";

const TableDoctorComponent = () => {
    const [doctors, setDoctors] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [errors, setErrors] = useState([]);
    const [modalDeleteShow, setModalDeleteShow] = useState(false);
    const [idDelete, setIdDelete] = useState(0);
    const [fields, setFields] = useState({
        name: "",
        phone_number: "",
        specialization: "",
        qualification: "",
        image: "",
    });

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        });
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.delete(`/doctor/${idDelete}`);
            setModalDeleteShow(false);
            fetchData();
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fieldsFormData = new FormData();
        fieldsFormData.append("name", fields.name);
        fieldsFormData.append("phone_number", fields.phone_number);
        fieldsFormData.append("specialization", fields.specialization);
        fieldsFormData.append("qualification", fields.qualification);
        fieldsFormData.append("image", fields.image);

        try {
            let res;
            if (fields.doctor_id) {
                res = await axios.put(
                    `/doctor/${fields.doctor_id}`,
                    fieldsFormData
                );
            } else {
                res = await axios.post("/doctor", fieldsFormData);
            }
            fetchData();
            setModalShow(false);
            toast.success(res.data.message);
        } catch (error) {
            setErrors(error.response.data.error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!modalShow) {
            setFields({
                name: "",
                phone_number: "",
                specialization: "",
                qualification: "",
                image: "",
            });
            setErrors([]);
        }
    }, [modalShow]);

    const fetchData = async () => {
        const response = await axios.get("/doctor");
        setDoctors(response.data.doctor_data);
    };

    return (
        <div className="col" id="content-side">
            <div className="head-title">
                <div className="left">
                    <h1>Doctor Data</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">Doctor</a>
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
                        <Modal.Header closeButton>Modal Doctor</Modal.Header>

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
                                        htmlFor="phone-number"
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
                                        htmlFor="specialization"
                                        className="col-form-label"
                                    >
                                        Specialization
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="specialization"
                                        name="specialization"
                                        onChange={handleChange}
                                        value={fields.specialization}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="qualification"
                                        className="col-form-label"
                                    >
                                        Qualification
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="qualification"
                                        name="qualification"
                                        onChange={handleChange}
                                        value={fields.qualification}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="doctor-image"
                                        className="col-form-label"
                                    >
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        aria-label="file example"
                                        required=""
                                        id="image"
                                        name="image"
                                        onChange={(e) =>
                                            setFields({
                                                ...fields,
                                                image: e.target.files[0],
                                            })
                                        }
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
                            <th scope="col">Phone Number</th>
                            <th scope="col">Specialist</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Doctor Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => (
                            <tr key={doctor.doctor_id}>
                                <th scope="row">{index + 1}</th>
                                <td>{doctor.name}</td>
                                <td>{doctor.phone_number}</td>
                                <td>{doctor.specialization}</td>
                                <td>{doctor.qualification}</td>
                                <td>
                                    <img src={doctor.image} alt="" />
                                </td>
                                <td>
                                    <div className="button-container">
                                        <button
                                            type="button"
                                            className="btn btn-warning button-action"
                                            onClick={() => {
                                                setModalShow(true);
                                                setFields(doctor);
                                            }}
                                        >
                                            <i className="fa fa-pen-to-square"></i>
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-danger button-action"
                                            onClick={() => {
                                                setModalDeleteShow(true);
                                                setIdDelete(doctor.doctor_id);
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
                            <p>Are you sure you want to delete this doctor?</p>
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
export default TableDoctorComponent;
