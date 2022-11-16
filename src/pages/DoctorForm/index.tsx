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
  crm: string;
}

const DoctorForm = () => {

  // função que recebe um novo objeto e depois altera
  const [doctor, setDoctor] = useState<Doctor>();

  // objeto começa nulo, função que altera o estado do objeto
  const [formData, setFormData] = useState<FormData>({
    crm: "",
    name: "",
    skill: "",
    phone: "",
    address: ""
  });

  // const { crm } = useParams<UrlParams>();

  // CREATE
  const handleCreate = () => {

  }

  // READ
  const handleRead = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(formData)

    axios.get(`https://my-json-server.typicode.com/guiosouza/fake-api-teste/doctors/${formData.crm}`)
      .then((response) => {
        setDoctor(response.data);
        setFormData(response.data)
      })
      .catch((error) => {
        setDoctor(undefined);
      });
  }

  // UPDATE
  const handleUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axios.put(`https://my-json-server.typicode.com/guiosouza/fake-api-teste/doctors/${formData.crm}`, formData)
      .then((response) => {
        console.log(response.data)
        alert("Dados salvos!");
      })
      .catch((error) => {
        setDoctor(undefined);
      });
  }

  // DELETE
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axios.delete(`https://my-json-server.typicode.com/guiosouza/fake-api-teste/doctors/${formData.crm}`,)
      .then((response) => {
        console.log(response.data)
        setFormData(response.data)
      })
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

            <div className="read-container">
              <input
                type="text"
                name="crm"
                value={formData.crm}
                onChange={handleChange}
                className="search-input"
                placeholder="CRM (somente números)"
              />
              <button onClick={handleRead} id="btnRead" className="btn btn-primary form-button">
                Buscar
              </button>
            </div>

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
              <button  onClick={handleCreate} type="submit" id="btnUpdate" className="btn btn-primary form-button">
                Criar
              </button>
              <button onClick={handleUpdate} type="submit" id="btnDelete" className="btn btn-primary form-button">
                Salvar
              </button>
              <button onClick={handleDelete} type="submit" id="btnDelete" className="btn btn-primary form-button">
                Deletar
              </button>
            </div>
          </div>
        </form>

        <h2>Dados do Médico</h2>
        {doctor &&
          <>
            <ResultCard title="CRM: " description={formData?.crm} />
            <ResultCard title="Nome: " description={formData?.name} />
            <ResultCard title="Especilidade: " description={formData?.skill} />
            <ResultCard title="Telefone: " description={formData?.phone} />
            <ResultCard title="Endereço: " description={formData?.address} />
          </>}
      </div>
    </div>
  );
};

export default DoctorForm;
