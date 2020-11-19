import React from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Header, ButtonHeader, DivH1Header, CreateButton, DivContainer, H2Home, DivRegister, InputForm } from "./styled";
import { useProtectPage } from "./hooks/useProtectPage"; 
import { useForm } from "./hooks/useForm";

function CreateTripsPage() {
  const history = useHistory();
  const { id } = useParams();

  const goToHomeAdm = () => {
    history.push("/homeAdm");
  };

  const { form, onChange } = useForm({
    id: "",
    name: "",
    description: "",
    planet: "",
    durationInDays: "",
    date: "",
  });

  const onChangeInput = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    getCreateTrip();
    console.log(form.name)
    console.log(form.description);
    console.log(form.planet)
    console.log(form.durationInDays);
    console.log(form.date);
   
  };

  useProtectPage();

  const getCreateTrip = () =>{
      axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joyce-dumont/trips`, form,
      {
        headers:{
          auth: localStorage.getItem("token")
        }
      }
    )
    .then((response) =>{
      alert("Viagem cadastrada com sucesso!")
      console.log(response)

    })
    .catch((error)=>{
      console.log(error.message)
      console.log("Caiu no erro de novo!")
    })
  }

  return (
    <DivContainer>
      <Header>
        <DivH1Header>
          <h1>Labe-X</h1>
        </DivH1Header>
        <ButtonHeader onClick={goToHomeAdm}> Voltar para Home </ButtonHeader>
      </Header>
      <div>
        <H2Home>Cadastrar uma nova viagem</H2Home>

        <DivRegister>
          <form onSubmit={onSubmitForm}>
            <label>Nome:</label>
            <input
              value={form.name}
              onChange={onChangeInput}
              pattern={"[A-Za-z ]{5,}"}
              name={"name"}
              type="text"
              required
            />
            <label>Planeta:</label>
            <select
              value={form.planet}
              onChange={onChangeInput}
              name={"planet"}
              type="text"
              required
            >
              <option value="Seleção">Selecione o planeta</option>
              <option value="Mercúrio">Mercúrio</option>
              <option value="Vênus">Vênus</option>
              <option value="Marte">Marte</option>
              <option value="Júpiter">Júpiter</option>
              <option value="Saturno">Saturno</option>
              <option value="Urano">Urano</option>
              <option value="Netuno">Netuno</option>
            </select>
            <label>Data da Viagem:</label>
            <input
              value={form.date}
              onChange={onChangeInput}
              name={"date"}
              type="date"
              required
            />
            <label>Duração da Viagem:</label>
            <input
              value={form.durationInDays}
              onChange={onChangeInput}
              name={"durationInDays"}
              min={50}
              type="number"
              required
            />
            <label>Descrição da Viagem:</label>
            <InputForm
              value={form.description}
              onChange={onChangeInput}
              name={"description"}
              type="text"
              pattern={"[A-Za-z ]{30,}"}
              required
            />

            <CreateButton>Criar Viagem</CreateButton>
          </form>
        </DivRegister>
      </div>
    </DivContainer>
  );
}

export default CreateTripsPage;
