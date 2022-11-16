import './styles.css';

import ResultCard from 'components/ResultCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'util/resquests';
import { useParams } from 'react-router-dom';

type FormData = {
  crm: string,
  name: string,
  skill: string,
  phone: string,
  address: string
}

type Doctor = {
  crm: string,
  name: string,
  skill: string,
  phone: string,
  address: string
}

type UrlParams = {
  crm : string;
}

const DoctorForm = () => {

  const [doctor, setDoctor] = useState<Doctor>();

  // objet, função que altera o objeto
  const [formData, setFormData] = useState<FormData>({
    crm: "",
    name: "",
    skill: "",
    phone: "",
    address: ""
  });

  const { crm } = useParams<UrlParams>();

  // READ
  const handleRead = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(formData)

    axios.get(`https://my-json-server.typicode.com/guiosouza/fake-api-teste/doctors/${formData.crm}`)
      .then((response) => {
        setDoctor(response.data);
        setFormData(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        setDoctor(undefined);
      });
  }  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value })
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
              value={formData.crm}
              onChange={handleChange}
              className="search-input"
              placeholder="CRM (somente números)"
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="search-input"
              placeholder="Nome"
            />
            <input
              type="text"
              name="skill"
              value={formData.skill}
              onChange={handleChange}
              className="search-input"
              placeholder="Especialidade"
              id=""
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="search-input"
              placeholder="Telefone (Somente números)"
              id=""
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="search-input"
              placeholder="Endereço "
              id=""
            />
            <div className="btn-container">
              <button onClick={handleRead} id="btnRead" className="btn btn-primary search-button">
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
        {doctor &&
          <>
            <ResultCard title="CRM: " description={doctor?.crm} />
            <ResultCard title="Nome: " description={doctor?.name} />
            <ResultCard title="Especilidade: " description={doctor?.skill} />
            <ResultCard title="Telefone: " description={doctor?.phone} />
            <ResultCard title="Endereço: " description={doctor?.address} />
          </>}
      </div>
    </div>
  );
};

export default DoctorForm;
