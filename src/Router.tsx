import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import DoctorForm from 'pages/DoctorForm';
import ConsultationForm from 'pages/ConsultationForm';
import PatientForm from 'pages/PatientForm';

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/docsearch">
        <DoctorForm />
      </Route>
      <Route path="/patientsearch" >
        <PatientForm />
      </Route>
      <Route path="/consultationsearch">
        <ConsultationForm />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
