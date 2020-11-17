import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Header,
  ButtonHeader,
  DivH1Header,
  RegisterButton,
  DivContainer,
  DivRegister,
  InputForm,
  H2Home
} from "./styled";

function ApplicationFormPage() {
  const history = useHistory()

   const goToHome = () => {
     history.push("/");
   };

   


  return (
    <DivContainer>
      <Header>
        <DivH1Header>
          <h1>Labe-X</h1>
        </DivH1Header>

        <ButtonHeader onClick={goToHome}>Voltar</ButtonHeader>
      </Header>

      <H2Home>Cadastrar uma nova viagem</H2Home>
      <DivRegister>
        <label>Nome:</label>
        <input></input>
        <label>Idade:</label>
        <input></input>
        <label>Texto de inscrição:</label>
        <InputForm></InputForm>
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

        <RegisterButton>Enviar Inscrição</RegisterButton>
      </DivRegister>
    </DivContainer>
  );
 
}

export default ApplicationFormPage;
