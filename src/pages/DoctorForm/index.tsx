import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';

type objGit = {
  login: string;
  id: number;
}

type DoctorData = {
  login: string,
  node_id: string
}

const DoctorForm = () => {

  const [doctorData, setDoctorData] = useState<DoctorData>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('mudou')
  }

  const handleSave = () => {

  }

  const handleDelete = () => {

  }

  return (
    <div className="doctor-search-container">
      <h1 className="text-primary">Cadastro de médicos</h1>
      <div className="container search-container">
        <form>
          <div className="form-container">
            <input
              type="text"
              name="login"
              value={doctorData.login}
              className="search-input"
              placeholder="Nome"
              id=""
            />
            <input
              type="text"
              name="id"
              value={doctorData.id}
              className="search-input"
              placeholder="Especialidade"
              id=""
            />
            <input
              type="text"
              className="search-input"
              placeholder="CRM (somente números)"
              id=""
              onChange={handleChange}
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

        <h2>Dados do Médico</h2>
        { doctorData &&
        <>
        <ResultCard title="Dados do Médico" description={doctorData.login} />
        <ResultCard title="Dados do Médico" description={doctorData.node_id} />
        </>
        }
      </div>
    </div>
  );
};

export default DoctorForm;
