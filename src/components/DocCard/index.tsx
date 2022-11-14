import './styles.css';
import DocImg from 'assets/images/doctor.png';

const DocCard = () => {
    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={DocImg} alt="Cadastro do Médico" />
            </div>
            <div className="card-bottom-container">
                <p>Crie e edite o cadastro dos médicos</p>
            </div>
        </div>
    );
}

export default DocCard;