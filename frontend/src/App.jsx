import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctorschedule from "./pages/Doctorschedule";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css";

import "./scss/styles.scss";
import * as bootstrap from "bootstrap";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Doctorschedule" element={<Doctorschedule />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
