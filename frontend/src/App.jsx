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


import "@fortawesome/fontawesome-free/css/all.min.css";

import "animate.css/animate.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css";

import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
import Logout from "./pages/Logout";


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
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
