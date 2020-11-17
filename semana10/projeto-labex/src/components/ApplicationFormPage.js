import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Header, ButtonHeader } from "./styled";

function ApplicationFormPage() {
  const history = useHistory()

   const goToHome = () => {
     history.push("/");
   };

   


  return (
    <div>
      <Header>
        <h1>Labe-X</h1>
        <ButtonHeader onClick={goToHome}>Voltar</ButtonHeader>
      </Header>
      <div>
        <h3>Cadastrar uma nova viagem</h3>
        <label>Nome:</label>
        <input></input>
        <label>Idade:</label>
        <input></input>
        <label>Texto de inscrição:</label>
        <input></input>
        <label>Profissão</label>
        <input></input>
        <label>País</label>
        <select>
          <option>Brasil</option>
          <option>Costa Rica</option>
          <option>Holanda</option>
          <option>Cuba</option>
          <option>Nigéria</option>
          <option>França</option>
        </select>
      </div>

      <button>Enviar Inscrição</button>
    </div>
  );
 
}

export default ApplicationFormPage;
