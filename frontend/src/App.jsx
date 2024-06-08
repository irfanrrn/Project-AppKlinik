import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctorschedule from "./pages/Doctorschedule";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
