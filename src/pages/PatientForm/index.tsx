import './styles.css';

import ResultCard from 'components/ResultCard';

const DoctorForm = () => {
  return (
    <div className="doctor-search-container">
      <h1 className="text-primary">Cadastro de pacientes</h1>
      <div className="container search-container">
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Nome"
              id=""
            />
            <input
              type="date"
              className="search-input"
              placeholder="Data de Nascimento (DD/MM/YYYY)"
              id=""
            />
            <input
              type="text"
              className="search-input"
              placeholder="CPF (somente números)"
              id=""
              onChange={() => { }}
            />
            <input
              type="text"
              className="search-input"
              placeholder="Telefone (Somente números)"
              id=""
            />
            <input
              type="text"
              className="search-input"
              placeholder="Endereço "
              id=""
            />
            <div className="btn-container">
              <button type="submit" className="btn btn-primary search-button">
                Buscar
              </button>
              <button type="submit" className="btn btn-primary search-button">
                Salvar alterações
              </button>
              <button type="submit" className="btn btn-primary search-button">
                Deletar
              </button>
            </div>
          </div>
        </form>

        <h2>Dados do Paciente</h2>
        <ResultCard title="Dados do Médico" description="Lalala" />

      </div>
    </div>
  );
};

export default DoctorForm;
