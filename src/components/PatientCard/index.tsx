import './styles.css';
import PatientImg from 'assets/images/patient.png';

const PatientCard = () => {
    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={PatientImg} alt="Cadastro do Médico" />
            </div>
            <div className="card-bottom-container">
                <p>Crie e edite o cadastro de clientes</p>
            </div>
        </div>
    );
}

export default PatientCard;