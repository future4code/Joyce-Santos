import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Header, ButtonHeader, DivH1Header, CreateButton, DivContainer, H2Home, DivRegister, InputForm } from "./styled";
import { useProtectPage } from "./hooks/useProtectPage"; 

function CreateTripsPage() {
  const history = useHistory();

  const goToHomeAdm = () => {
    history.push("/homeAdm");
  };

  useProtectPage();

  const getCreateTrip = () =>{
    const body = {
      id: "",
      name: "",
      description: "",
      planet: "",
      durationInDays: "",
      date: "",
    };

    axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joyce-dumont/trips`, body,
      {
        headers:{
          Authentication: localStorage.getItem("token")
        }
      }
    )
    .then((response) =>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error.message)
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
          <label>Nome:</label>
          <input />
          <label>Planeta:</label>
          <input />
          <label>Data da Viagem:</label>
          <input />
          <label>Duração da Viagem:</label>
          <input />
          <label>Descrição da Viagem:</label>
          <InputForm type="text" />

          <CreateButton>Criar Viagem</CreateButton>
        </DivRegister>
      </div>
    </DivContainer>
  );
}

export default CreateTripsPage;
