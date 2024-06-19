import {useEffect, useState} from "react";
import axios from "axios";
import {Modal} from "react-bootstrap";
import toast from "react-hot-toast";
import CreatableSelect from "react-select/creatable";

const TableAppointmentComponent = () => {
    const [appointments, setAppointments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [patients, setPatients] = useState([]);
    const [users, setUsers] = useState([]);
    const [modalEditShow, setModalEditShow] = useState(false);
    const [modalAddShow, setModalAddShow] = useState(false);
    const [modalDetailShow, setModalDetailShow] = useState(false);
    const [fieldsAdd, setFieldsAdd] = useState({
        doctor_id: '',
        user_id: '',
        patient_id: '',
        day: '',
        name: '',
        gender: '',
        address: '',
        date_of_birth: '',
        phone_number: '',
        email: '',
    });
    const [fieldsEdit, setFieldsEdit] = useState({
        appointment_id: '',
        status: '',
    });
    const [detailData, setDetailData] = useState({});

    const statusColor = {
        'Will come': 'secondary',
        'Completed': 'success',
        'Canceled': 'danger',
    };
    const fetchData = async () => {
        try {
            const res = await axios.get('/appointment');
            setAppointments(res.data.appointment_data);
            console.log(res.data.appointment_data);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchDoctors = async () => {
        try {
            const res = await axios.get('/doctor');
            setDoctors(res.data.doctor_data);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchPatients = async () => {
        try {
            const res = await axios.get('/patient');
            setPatients(res.data.patient_data);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchUsers = async () => {
        try{
            const res = await axios.get('/user');
            setUsers(res.data.user_data);
        }catch (err){
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.put(`/appointment/status/${fieldsEdit.appointment_id}`, fieldsEdit);
            setModalEditShow(false);
            fetchData();
            toast.success(res.data.message);
        } catch (e) {
            console.log(e);
        }
    }

    const addSubmitHandle = async (e) => {
        e.preventDefault();
        console.log(fieldsAdd);
        try{
            const res = await axios.post('/appointment', fieldsAdd);
            setModalAddShow(false);
            fetchData();
            toast.success(res.data.message);
        }catch(e){
            console.log(e);
        }
    }

    const changeHandle = (e) => {
        setFieldsAdd({
            ...fieldsAdd,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        fetchData();
        fetchDoctors();
        fetchPatients();
        fetchUsers();
    }, []);

    useEffect(() => {
        if(!modalAddShow){
            setFieldsAdd({
                doctor_id: '',
                user_id: '',
                patient_id: '',
                day: '',
                name: '',
                gender: '',
                address: '',
                date_of_birth: '',
                phone_number: '',
                email: '',
            });
        }
    }, [modalAddShow]);
    return (
        <div className="col" id="content-side">
            <div className="head-title">
                <div className="left">
                    <h1>Appointment Data</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">Appointment</a>
                        </li>
                        <li>
                            <i className="bx fa fa-chevron-right"/>
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
                <button type="button" className="btn btn-primary my-3 button-add" onClick={() => setModalAddShow(true)}>
                    <i
                        className="fa fa-plus me-1"></i> Add Data
                </button>
                <table className="table mt-5">
                    <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Date</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Queque</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={appointment.apppointment_id}>
                            <th scope="row">{index + 1}</th>
                            <td>{new Date(appointment.date).toISOString().slice(0, 10)}</td>
                            <td>{appointment.patient_name}</td>
                            <td>{appointment.doctor_name}</td>
                            <td>
                                <span
                                    className={`badge text-bg-${statusColor[appointment.status]} text-white`}>{appointment.status}</span>
                            </td>
                            <td>{appointment.queue_no}</td>
                            <td>
                                <div className="button-container">
                                    <button className="btn btn-success button-action" onClick={() => {
                                        setModalDetailShow(true);
                                        setDetailData(appointment);
                                    }}><i
                                        className="fa-brands fa-readme"></i></button>
                                    {appointment.status == 'Will come' &&
                                        <button onClick={() => {
                                            setModalEditShow(true);
                                            setFieldsEdit(appointment);
                                        }}
                                                className="btn btn-warning button-action"><i
                                            className="fa fa-pen-to-square"></i></button>
                                    }
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {/*Detail Modal */}
                <Modal
                    show={modalDetailShow}
                    onHide={() => setModalDetailShow(false)}
                    scrollable={true}
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                    size={"md"}>
                    <Modal.Header closeButton>
                        <Modal.Title>Detail Appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex flex-column gap-2">
                            <div className="d-flex justify-content-between">
                                Patient Name:
                                <span>{detailData.patient_name}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                Doctor Name:
                                <span>{detailData.doctor_name}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                Date:
                                <span>{detailData.date && new Date(detailData.date).toISOString().slice(0, 10)}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                Queue:
                                <span>{detailData.queue_no}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                Status:
                                <span className={`badge text-bg-${statusColor[detailData.status]} text-white`}>{detailData.status}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                Rating:
                                <span>{detailData.rating ? detailData.rating : '-'}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                Review:
                                <span>{detailData.review ? detailData.review : '-'}</span>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

                {/*Add Modal */}
                <Modal
                    show={modalAddShow}
                    onHide={() => setModalAddShow(false)}
                    scrollable={true}
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                    size={"lg"}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={addSubmitHandle}>
                            <h2>Patient / User Data</h2>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="user_id" className='user_id'>User</label>
                                    <select name="user_id" id="user_id" className='form-control' value={fieldsAdd.user_id} onChange={changeHandle}>
                                    <option value="" hidden></option>
                                        {users.map((user) => (
                                        <option key={user.user_id} value={user.user_id}>{user.username}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group mt-3 col-md-6">
                                    <label className={'form-label'}>Patient Name</label>
                                    <CreatableSelect isClearable={true}
                                                     onChange={(e) => {
                                                         if (e.__isNew__) {
                                                             setFieldsAdd({
                                                                 ...fieldsAdd,
                                                                 name: e.value,
                                                                 patient_id: '',
                                                                 gender: '',
                                                                 address: '',
                                                                 date_of_birth: '',
                                                                 phone_number: '',
                                                                 email: '',
                                                             });
                                                         } else {
                                                             console.log(patients);
                                                             const patient = patients.find(p => p.patient_id == e.value);
                                                             console.log(patient);
                                                             setFieldsAdd({
                                                                 ...fieldsAdd,
                                                                 patient_id: e.value,
                                                                 name: patient.name,
                                                                 gender: patient.gender,
                                                                 address: patient.address,
                                                                 date_of_birth: new Date(patient.date_of_birth).toISOString().slice(0, 10),
                                                                 phone_number: patient.phone_number,
                                                                 email: patient.email,
                                                             });
                                                         }
                                                     }}
                                                     options={patients.map(patient => ({
                                                         value: patient.patient_id,
                                                         label: patient.name
                                                     }))}
                                    />
                                </div>
                                <div className="form-group mt-4 col-md-6">
                                    <label htmlFor="gender">Gender</label>
                                    <input name="gender" required id="gender" onChange={changeHandle}
                                           value={fieldsAdd.gender} disabled={fieldsAdd.patient_id}
                                           className="form-control"/>
                                </div>
                                <div className="form-group mt-3 col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" onChange={changeHandle}
                                           value={fieldsAdd.email} disabled={fieldsAdd.patient_id} name='email'
                                           id='email' required/>
                                </div>
                                <div className="form-group mt-3 col-md-6">
                                    <label htmlFor="phone_number">Phone Number</label>
                                    <input type="number" className="form-control" onChange={changeHandle}
                                           value={fieldsAdd.phone_number} disabled={fieldsAdd.patient_id}
                                           name='phone_number' id='phone_number'
                                           required/>
                                </div>
                                <div className="form-group mt-3 col-md-6">
                                    <label htmlFor="date_of_birth">Date Of Birth</label>
                                    <input type="text" className="form-control" onChange={changeHandle}
                                           value={fieldsAdd.date_of_birth} disabled={fieldsAdd.patient_id}
                                           name='date_of_birth' id='date_of_birth'
                                           required/>
                                </div>
                                <div className="form-group mt-3 col-md-6">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" onChange={changeHandle}
                                           value={fieldsAdd.address} disabled={fieldsAdd.patient_id} name='address'
                                           id='address' required/>
                                </div>
                            </div>

                            <h2 className='my-4'>Appointment Data</h2>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label htmlFor="doctor_id">Doctor</label>
                                    <select name="doctor_id" id="doctor_id" required value={fieldsAdd.doctor_id}
                                            onChange={changeHandle} className="form-control">
                                        <option value="" hidden></option>
                                        {doctors.map((doctor) => <option key={doctor.doctor_id}
                                                                         value={doctor.doctor_id}>{doctor.name}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="day">Day</label>
                                    <select name="day" id="day" required value={fieldsAdd.day}
                                            onChange={changeHandle} className="form-control">
                                        <option value="" hidden></option>
                                        <option value="today">Today</option>
                                        <option value="tomorrow">Tomorrow</option>
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
                    </Modal.Body>
                </Modal>

                {/*Edit Modal */}
                <Modal
                    show={modalEditShow}
                    onHide={() => setModalEditShow(false)}
                    scrollable={true}
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true">
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Status Appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="status" className={'col-form-label'}>Status</label>
                            <select name="status"
                                    value={fieldsEdit.status}
                                    className="form-control"
                                    onChange={(e) => setFieldsEdit({...fieldsEdit, status: e.target.value})}
                                    id="status">
                                <option value="Will come">Will come</option>
                                <option value="Completed">Completed</option>
                                <option value="Canceled">Canceled</option>
                            </select>

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
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}
export default TableAppointmentComponent;