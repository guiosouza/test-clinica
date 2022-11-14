import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import DoctorForm from 'pages/DoctorForm';
import PatientCard from 'components/PatientCard';
import ConsultationForm from 'pages/ConsultationForm';
import PatientForm from 'pages/PatientForm';

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/docsearch" element={<DoctorForm/>}></Route>
      <Route path="/patientsearch" element={<PatientForm/>}></Route>
      <Route path="/consultationsearch" element={<ConsultationForm/>}></Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
