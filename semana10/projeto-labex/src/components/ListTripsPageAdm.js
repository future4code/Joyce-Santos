import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Header,
  ButtonHeader,
  DivContainer,
  DivH1Header,
  H2Home,
  DivContainerList,
} from "./styled";

function ListTripsPageAdm() {
const history =useHistory()

   const goToHomeAdm = () => {
     history.push("/homeAdm");
   };
  return (
    <DivContainerList>
      <Header>
        <DivH1Header>
          <h1>Labe-X</h1>
        </DivH1Header>

        <ButtonHeader onClick={goToHomeAdm}> Voltar para Home </ButtonHeader>
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
          <li>
            <p>Nome:</p>
            <p>Planeta:</p>
            <p>Data da viagem:</p>
            <p>Duração da Viagem:</p>
          </li>
          <li>
            <p>Nome:</p>
            <p>Planeta:</p>
            <p>Data da viagem:</p>
            <p>Duração da Viagem:</p>
          </li>
        </strong>
      </ol>
    </DivContainerList>
  ); 
}

export default ListTripsPageAdm;
