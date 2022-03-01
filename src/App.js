import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from "./Components/Appointment";
import DisplayDoctor from "./Components/DisplayDoctor";
import DoctorProfile from "./Components/DoctorProfile";
import DisplayMedical from "./Components/DisplayMedical";
import Specialization from "./Components/Specialization";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Specialization" element={<Specialization />} />
          <Route path="/About" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/displayDoctor" element={<DisplayDoctor />} />
          <Route path="/DoctorProfile/:id" element={<DoctorProfile />} />
          <Route path="/displayMedical" element={<DisplayMedical />} />
          <Route path="/Appointment/:name" element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
