import './styles.css';

import ResultCard from 'components/ResultCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Doctor } from 'types/doctor';
import { BASE_URL } from 'util/resquests';
import { useParams } from 'react-router-dom';

type FormData = {
  crm: string,
  name: string,
  skill: string,
  phone: string,
  address: string
}

const DoctorForm = () => {

  // objet, função que altera o objeto
  const [formData, setFormData] = useState<FormData>({
    crm: "",
    name: "",
    skill: "",
    phone: "",
    address: ""
  });

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    console.log("hi")
  }


  return (
    <div className="doctor-search-container">
      <h1 className="text-primary">Cadastro de médicos</h1>
      <div className="container search-container">
        <form>
          <div className="form-container">
            <input
              type="text"
              name="crm"
              className="search-input"
              placeholder="CRM (somente números)"
            />
            <input
              type="text"
              name="name"
              className="search-input"
              placeholder="Nome"
            />
            <input
              type="text"
              name="skill"
              className="search-input"
              placeholder="Especialidade"
              id=""
            />
            <input
              type="text"
              name="phone"
              className="search-input"
              placeholder="Telefone (Somente números)"
              id=""
            />
            <input
              type="text"
              name="address"
              className="search-input"
              placeholder="Endereço "
              id=""
            />
            <div className="btn-container">
              <button onClick={handleClick} id="btnRead" className="btn btn-primary search-button">
                Buscar
              </button>
              <button type="submit" id="btnUpdate" className="btn btn-primary search-button">
                Salvar alterações
              </button>
              <button type="submit" id="btnDelete" className="btn btn-primary search-button">
                Deletar
              </button>
            </div>
          </div>
        </form>

        <h2>Dados do Médico</h2>
        {<>
          <ResultCard title="CRM: " description="" />
          <ResultCard title="Nome: " description="" />
          <ResultCard title="Especilidade: " description="" />
          <ResultCard title="Telefone: " description="" />
          <ResultCard title="Endereço: " description="" />
        </>}
      </div>
    </div>
  );
};

export default DoctorForm;
