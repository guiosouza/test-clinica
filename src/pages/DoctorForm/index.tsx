import './styles.css';

import ResultCard from 'components/ResultCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Doctor } from 'types/doctor';
import { BASE_URL } from 'util/resquests';
import { useParams } from 'react-router-dom';

type UrlParams = {
  doctorCRM: string
}

const doctor = {
  name: "João",
  skill: "Ortopedia",
  crm: "3344",
  phone: "9999-9999",
  address: "Rua do Pombo"
}

const DoctorForm = () => {


  const { doctorCRM } = useParams<UrlParams>();

  //const [doctor, setDoctor] = useState<Doctor>();

  // const getDoctors = () => {
  //   // argumentos: Função, lista de objetos que quero observar
  //   useEffect(() => {
  //     axios.get(`${BASE_URL}/doctors/${CRM}`)
  //       .then(response => {
  //         setDoctor = (response.data);
  //       });
  //   }, [CRM]);// Se atualizar eu vou chamar a requisisão e mudar o produto
  // }

  return (
    <div className="doctor-search-container">
      <h1 className="text-primary">Cadastro de médicos</h1>
      <div className="container search-container">
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="CRM (somente números)"
              id=""
            />
            <input
              type="text"
              name="login"
              className="search-input"
              placeholder="Nome"
            />
            <input
              type="text"
              name="id"
              className="search-input"
              placeholder="Especialidade"
              id=""
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
        {doctor && <ResultCard title="Nome: " description={doctor?.name} />}
        {doctor && <ResultCard title="Especialidade: " description={doctor?.skill} />}
        {doctor && <ResultCard title="CRM: " description={doctor?.crm} />}
        {doctor && <ResultCard title="Telefone: " description={doctor?.phone} />}
        {doctor && <ResultCard title="Endereço: " description={doctor?.address} />}
      </div>
    </div>
  );
};

export default DoctorForm;
