import './styles.css';

import ResultCard from 'components/ResultCard';

const DoctorForm = () => {
  return (
    <div className="doctor-search-container">
      <h1 className="text-primary">Cadastro de consultas</h1>
      <div className="container search-container">
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Nome do paciente"
              id=""
            />
            <input
              type="text"
              className="search-input"
              placeholder="Médico responsável"
              id=""
              onChange={() => { }}
            />
            <input
              type="date"
              className="search-input"
              placeholder="Data da consulta (DD/MM/YYYY)"
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

        <h2>Dados da consulta</h2>
        

      </div>
    </div>
  );
};

export default DoctorForm;
