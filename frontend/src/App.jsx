import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctorschedule from "./pages/Doctorschedule";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import AppointmentAll from "./pages/AppointmentAll";
import FormAppointment from "./pages/FormAppointment";
import AppointmentCan from "./pages/AppointmentCan";
import AppointmentCom from "./pages/AppointmentCom";
import AppointmentUp from "./pages/AppointmentUp";
import Dashboard from "./pages/Dashboard";
import FormAdmin from "./pages/FormAdmin";
import AppointmentForm from "./pages/AppointmentForm";
import DoctorForm from "./pages/DoctorForm";
import DoctorScheduleForm from "./pages/DoctorScheduleForm";
import PatientForm from "./pages/PatientForm";
import UserForm from "./pages/UserForm";
import Dashboard from "./pages/Dashboard";
import DoctorAppintment from "./pages/DoctorAppintment";


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
        <Route path="/doctorschedule" element={<Doctorschedule />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/appointmentall" element={<AppointmentAll />} />
        <Route path="/formappointment" element={<FormAppointment />} />
        <Route path="/appointmentcan" element={<AppointmentCan />} />
        <Route path="/appointmentcom" element={<AppointmentCom />} />
        <Route path="/appointmentup" element={<AppointmentUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/formAdmin" element={<FormAdmin />} />
        <Route path="/formAppointment" element={<AppointmentForm />} />
        <Route path="/formDoctor" element={<DoctorForm />} />
        <Route path="/formDoctorSchedule" element={<DoctorScheduleForm />} />
        <Route path="/formPatient" element={<PatientForm />} />
        <Route path="/formUser" element={<UserForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/doctorappointment" element={<DoctorAppintment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
