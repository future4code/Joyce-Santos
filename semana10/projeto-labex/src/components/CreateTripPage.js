import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Header, ButtonHeader } from "./styled";

function CreateTripsPage() {
  const history = useHistory();

  const goToHomeAdm = () => {
    history.push("/homeAdm");
  };

  return (
    <div>
      <Header>
        <h1>Labe-X</h1>
        <ButtonHeader onClick={goToHomeAdm}> Voltar para Home </ButtonHeader>
      </Header>
      <div>
        <h1>Cadastrar uma nova viagem</h1>
        <label>Nome:</label>
        <input></input>
        <label>Planeta:</label>
        <input></input>
        <label>Data da Viagem:</label>
        <input></input>
        <label>Duração da Viagem:</label>
        <input></input>
        <label>Descrição da Viagem:</label>
        <input></input>

        <button>Criar Viagem</button>
      </div>
    </div>
  );
}

export default CreateTripsPage;
