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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
