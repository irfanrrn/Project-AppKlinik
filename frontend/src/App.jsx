import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Doctor from "./pages/Admin/Doctor";
import DocSchedule from "./pages/Admin/DocSchedule";
import Appointment from "./pages/Admin/Appointment";
import Patient from "./pages/Admin/Patient";
import User from "./pages/Admin/User";

import Doctorschedule from "./pages/Doctorschedule";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import AppointmentAll from "./pages/AppointmentAll";
import FormAppointment from "./pages/FormAppointment";
import AppointmentCan from "./pages/AppointmentCan";
import AppointmentCom from "./pages/AppointmentCom";
import AppointmentUp from "./pages/AppointmentUp";

import FormAdmin from "./pages/FormAdmin";
import AppointmentForm from "./pages/AppointmentForm";
import DoctorForm from "./pages/DoctorForm";
import DoctorScheduleForm from "./pages/DoctorScheduleForm";
import PatientForm from "./pages/PatientForm";
import UserForm from "./pages/UserForm";

import MdViewD1 from "./pages/MdViewD1";
import MdViewD2 from "./pages/MdViewD2";
import MdViewD3 from "./pages/MdViewD3";
import MdViewD4 from "./pages/MdViewD4";
import MdViewD5 from "./pages/MdViewD5";
import MdViewD6 from "./pages/MdViewD6";

import MdViewP1 from "./pages/MdViewP1";

import MdViewDS1 from "./pages/MdViewDS1";
import MdViewDS2 from "./pages/MdViewDS2";
import MdViewDS3 from "./pages/MdViewDS3";
import MdViewDS4 from "./pages/MdViewDS4";
import MdViewDS5 from "./pages/MdViewDS5";
import MdViewDS6 from "./pages/MdViewDS6";

import MdViewAdm1 from "./pages/MdViewAdm1";

import MdViewUs1 from "./pages/MdViewUs1";

import MdViewApp1 from "./pages/MdViewApp1";
import MdViewApp2 from "./pages/MdViewApp2";
import MdViewApp3 from "./pages/MdViewApp3";
import MdViewApp4 from "./pages/MdViewApp4";
import MdViewApp5 from "./pages/MdViewApp5";
import MdViewApp6 from "./pages/MdViewApp6";

import DoctorEdit1 from "./pages/DoctorEdit1";
import DoctorEdit2 from "./pages/DoctorEdit2";
import DoctorEdit3 from "./pages/DoctorEdit3";
import DoctorEdit4 from "./pages/DoctorEdit4";
import DoctorEdit5 from "./pages/DoctorEdit5";
import DoctorEdit6 from "./pages/DoctorEdit6";

import DoctorScheduleEdit1 from "./pages/DoctorScheduleEdit1";
import DoctorScheduleEdit2 from "./pages/DoctorScheduleEdit2";
import DoctorScheduleEdit3 from "./pages/DoctorScheduleEdit3";
import DoctorScheduleEdit4 from "./pages/DoctorScheduleEdit4";
import DoctorScheduleEdit5 from "./pages/DoctorScheduleEdit5";

import PatientEdit1 from "./pages/PatientEdit1";
import PatientEdit2 from "./pages/PatientEdit2";
import PatientEdit3 from "./pages/PatientEdit3";
import PatientEdit4 from "./pages/PatientEdit4";
import PatientEdit5 from "./pages/PatientEdit5";

import AppointmentEdit1 from "./pages/AppointmentEdit1";
import AppointmentEdit2 from "./pages/AppointmentEdit2";
import AppointmentEdit3 from "./pages/AppointmentEdit3";
import AppointmentEdit4 from "./pages/AppointmentEdit4";
import AppointmentEdit5 from "./pages/AppointmentEdit5";
import AppointmentEdit6 from "./pages/AppointmentEdit6";

import UserEdit1 from "./pages/UserEdit1";
import UserEdit2 from "./pages/UserEdit2";
import UserEdit3 from "./pages/UserEdit3";
import UserEdit4 from "./pages/UserEdit4";
import UserEdit5 from "./pages/UserEdit5";
import UserEdit6 from "./pages/UserEdit6";

import AdminEdit1 from "./pages/AdminEdit1";
import AdminEdit2 from "./pages/AdminEdit2";
import AdminEdit3 from "./pages/AdminEdit3";
import AdminEdit4 from "./pages/AdminEdit4";
import AdminEdit5 from "./pages/AdminEdit5";
import AdminEdit6 from "./pages/AdminEdit6";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "animate.css/animate.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css";

import "./scss/styles.scss";
import * as bootstrap from "bootstrap";


function App() {
  return (
   <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard-admin" element={<Dashboard />} />
        <Route path="/doctor-admin" element={<Doctor />} />
        <Route path="/schedule-admin" element={<DocSchedule />} />
        <Route path="/appointment-admin" element={<Appointment />} />
        <Route path="/patient-admin" element={<Patient />} />
        <Route path="/user-admin" element={<User />} />

        <Route path="/doctorschedule" element={<Doctorschedule />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/appointmentall" element={<AppointmentAll />} />
        <Route path="/formappointment" element={<FormAppointment />} />
        <Route path="/appointmentcan" element={<AppointmentCan />} />
        <Route path="/appointmentcom" element={<AppointmentCom />} />
        <Route path="/appointmentup" element={<AppointmentUp />} />
        
        <Route path="/formAdmin" element={<FormAdmin />} />
        <Route path="/appointmentform" element={<AppointmentForm />} />
        <Route path="/formDoctor" element={<DoctorForm />} />
        <Route path="/formDoctorSchedule" element={<DoctorScheduleForm />} />
        <Route path="/formPatient" element={<PatientForm />} />
        <Route path="/formUser" element={<UserForm />} />

        <Route path="/view-doctor1" element={<MdViewD1 />} />
        <Route path="/view-doctor2" element={<MdViewD2 />} />
        <Route path="/view-doctor3" element={<MdViewD3 />} />
        <Route path="/view-doctor4" element={<MdViewD4 />} />
        <Route path="/view-doctor5" element={<MdViewD5 />} />
        <Route path="/view-doctor6" element={<MdViewD6 />} />
        <Route path="/view-patient1" element={<MdViewP1 />} />
        <Route path="/viewdoc-schedule1" element={<MdViewDS1 />} />
        <Route path="/viewdoc-schedule2" element={<MdViewDS2 />} />
        <Route path="/viewdoc-schedule3" element={<MdViewDS3 />} />
        <Route path="/viewdoc-schedule4" element={<MdViewDS4 />} />
        <Route path="/viewdoc-schedule5" element={<MdViewDS5 />} />
        <Route path="/viewdoc-schedule6" element={<MdViewDS6 />} />
        <Route path="/view-admin1" element={<MdViewAdm1 />} />
        <Route path="/view-user1" element={<MdViewUs1 />} />
        <Route path="/view-appointment1" element={<MdViewApp1 />} />
        <Route path="/view-appointment2" element={<MdViewApp2 />} />
        <Route path="/view-appointment3" element={<MdViewApp3 />} />
        <Route path="/view-appointment4" element={<MdViewApp4 />} />
        <Route path="/view-appointmnet5" element={<MdViewApp5 />} />
        <Route path="/view-appointmnet6" element={<MdViewApp6 />} />

       <Route path="/doctorEdit1" element={<DoctorEdit1 />} />
        <Route path="/doctorEdit2" element={<DoctorEdit2 />} />
        <Route path="/doctorEdit3" element={<DoctorEdit3 />} />
        <Route path="/doctorEdit4" element={<DoctorEdit4 />} />
        <Route path="/doctorEdit5" element={<DoctorEdit5 />} />
        <Route path="/doctorEdit6" element={<DoctorEdit6 />} />

        <Route path="/doctorScheduleEdit1" element={<DoctorScheduleEdit1 />} />
        <Route path="/doctorScheduleEdit2" element={<DoctorScheduleEdit2 />} />
        <Route path="/doctorScheduleEdit3" element={<DoctorScheduleEdit3 />} />
        <Route path="/doctorScheduleEdit4" element={<DoctorScheduleEdit4 />} />
        <Route path="/doctorScheduleEdit5" element={<DoctorScheduleEdit5 />} />

        <Route path="/patientEdit1" element={<PatientEdit1 />} />
        <Route path="/patientEdit2" element={<PatientEdit2 />} />
        <Route path="/patientEdit3" element={<PatientEdit3 />} />
        <Route path="/patientEdit4" element={<PatientEdit4 />} />
        <Route path="/patientEdit5" element={<PatientEdit5 />} />

        <Route path="/appointmentedit1" element={<AppointmentEdit1 />} />
        <Route path="/appointmentedit2" element={<AppointmentEdit2 />} />
        <Route path="/appointmentedit3" element={<AppointmentEdit3 />} />
        <Route path="/appointmentedit4" element={<AppointmentEdit4 />} />
        <Route path="/appointmentedit5" element={<AppointmentEdit5 />} />
        <Route path="/appointmentedit6" element={<AppointmentEdit6 />} />

        <Route path="/useredit1" element={<UserEdit1 />} />
        <Route path="/useredit2" element={<UserEdit2 />} />
        <Route path="/useredit3" element={<UserEdit3 />} />
        <Route path="/useredit4" element={<UserEdit4 />} />
        <Route path="/useredit5" element={<UserEdit5 />} />
        <Route path="/useredit6" element={<UserEdit6 />} />

        <Route path="/adminEdit1" element={<AdminEdit1 />} />
        <Route path="/adminEdit2" element={<AdminEdit2 />} />
        <Route path="/adminEdit3" element={<AdminEdit3 />} />
        <Route path="/adminEdit4" element={<AdminEdit4 />} />
        <Route path="/adminEdit5" element={<AdminEdit5 />} />
        <Route path="/adminEdit6" element={<AdminEdit6 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
