import './styles.css';
import ConsultationImg from 'assets/images/consultation.png';

const ConsultationCard = () => {
    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ConsultationImg} alt="Cadastro do Médico" />
            </div>
            <div className="card-bottom-container">
                <p>Crie e edite as consultas</p>
            </div>
        </div>
    );
}

export default ConsultationCard;