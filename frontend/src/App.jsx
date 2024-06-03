import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
