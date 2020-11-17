import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Header,
  ButtonHeader,
  DivContainer,
  DivH1Header,
  H2Home,
  SubscribeButton,
  DivContainerList,
} from "./styled";

function ListTripsPage() {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToForm = () =>{
      history.push("/formulario")
  }
  return (
    <DivContainerList>
      <Header>
        <DivH1Header>
          <h1>Labe-X</h1>
        </DivH1Header>

        <ButtonHeader onClick={goToHome}> Voltar para Home </ButtonHeader>
      </Header>
      <H2Home>Lista das Viagens Disponíveis</H2Home>
      <ol>
        <strong>
          <li>
            <p>Nome:</p>
            <p>Planeta:</p>
            <p>Data da viagem:</p>
            <p>Duração da Viagem:</p>
          </li>
          <SubscribeButton onClick={goToForm}>Inscreva-se</SubscribeButton>
          <li>
            <p>Nome:</p>
            <p>Planeta:</p>
            <p>Data da viagem:</p>
            <p>Duração da Viagem:</p>
          </li>
          <SubscribeButton onClick={goToForm}>Inscreva-se</SubscribeButton>
        </strong>
      </ol>
    </DivContainerList>
  );
}

export default ListTripsPage;
