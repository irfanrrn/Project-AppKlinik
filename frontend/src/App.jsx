import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctorschedule from "./pages/Doctorschedule";
import Login from "./pages/Login";

import "@fortawesome/fontawesome-free/css/all.css";

import "./scss/styles.scss";
import * as bootstrap from "bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Doctorschedule" element={<Doctorschedule />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
