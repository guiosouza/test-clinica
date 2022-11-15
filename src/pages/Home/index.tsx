import ConsultationCard from 'components/ConsultationCard';
import DocCard from 'components/DocCard';
import PatientCard from 'components/PatientCard';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <Link to="/docsearch">
                <DocCard/>
                <button className="btn btn-primary btn-lg start-button">Cadastro de médicos</button>
            </Link>
            <Link to="/patientsearch">
                <PatientCard/>
                <button className="btn btn-primary btn-lg start-button">Cadastro de pacientes</button>
            </Link>
            <Link to="/consultationsearch">
                <ConsultationCard/>
                <button className="btn btn-primary btn-lg start-button">Consultas</button>
            </Link>
        </div>
    );
}

export default Home;
