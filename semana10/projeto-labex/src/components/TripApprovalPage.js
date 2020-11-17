import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Header, ButtonHeader, DivH1Header, DivContainer, H2Home, Image } from "./styled";
import check from "./img/check.png"
import cross from "./img/cross.png"

function TripDetailsPage() {
  const history = useHistory()

   const goToHomeAdm = () => {
     history.push("/homeAdm");
   };
  return (
    <DivContainer>
      <Header>
        <DivH1Header>
          <h1>Labe-X</h1>
        </DivH1Header>

        <ButtonHeader onClick={goToHomeAdm}> Voltar para Home </ButtonHeader>
      </Header>
      <H2Home>Aqui você pode gerenciar as inscrições para suas viagens</H2Home>

      <ol>
       
          <li>
            <p>Nome do Candidato:</p>
            <p>Idade:</p>
            <p>Profissão:</p>
            <p>Texto de inscrição:</p>
            <p>País:</p>
          </li>
          <Image img src={check} onClick />
          <Image img src={cross} onClick />
          <li>
            <p>Nome do Candidato:</p>
            <p>Idade:</p>
            <p>Profissão:</p>
            <p>Texto de inscrição:</p>
            <p>País:</p>
          </li>
          <Image img src={check} onClick />
          <Image img src={cross} onClick />
       
      </ol>
    </DivContainer>
  ); 
}

export default TripDetailsPage;
