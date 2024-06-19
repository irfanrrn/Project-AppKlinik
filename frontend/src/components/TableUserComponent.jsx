import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";

const TableUserComponent = () => {
    const [users, setUsers] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [errors, setErrors] = useState([]);
    const [modalDeleteShow, setModalDeleteShow] = useState(false);
    const [idDelete, setIdDelete] = useState(0);
    const [fields, setFields] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        });
    };

    const handleDelete = async () => {
        try {
            let res = await axios.delete(`/user/${idDelete}`);
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
            if (fields.user_id) {
                res = await axios.put(
                    `/user/${fields.user_id}`,
                    fields
                );
            } else {
                res = await axios.post("/user", fields);
            }
            fetchData();
            setModalShow(false);
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
            setErrors(error.response.data.error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!modalShow) {
            setFields({
                username: "",
                email: "",
                password: "",
            });
            setErrors([]);
        }
    }, [modalShow]);

    const fetchData = async () => {
        const response = await axios.get("/user");
        setUsers(response.data.user_data);
    };

    return (
        <div className="col" id="content-side">
            <div className="head-title">
                <div className="left">
                    <h1>User Data</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">User</a>
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
                        <Modal.Header closeButton>Modal User</Modal.Header>

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
                                        htmlFor="username"
                                        className="col-form-label"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        onChange={handleChange}
                                        value={fields.username}
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
                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="col-form-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        required
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={fields.password}
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
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key = {user.user_id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <div className="button-container">
                                        <button 
                                            type="button"
                                            className="btn btn-warning button-action"
                                            onClick={() =>{
                                                setModalShow(true);
                                                setFields({...user, password: ''});
                                            }}
                                        >
                                            <i className="fa fa-pen-to-square"></i>
                                        </button>

                                        <button 
                                            type="button"
                                            className="btn btn-danger button-action"
                                            onClick={() => {
                                                setModalDeleteShow(true);
                                                setIdDelete (user.user_id);
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
                            <p>Are you sure you want to delete this user?</p>
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
export default TableUserComponent;
