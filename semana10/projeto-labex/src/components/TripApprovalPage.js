import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Header, ButtonHeader } from "./styled";

function TripDetailsPage() {
  const history = useHistory()

   const goToHomeAdm = () => {
     history.push("/homeAdm");
   };
  return (
    <div>
      <Header>
        <h1>Labe-X</h1>
        <ButtonHeader onClick={goToHomeAdm}> Voltar para Home </ButtonHeader>
      </Header>
      <p>Aqui você pode gerenciar as inscrições para suas viagens</p>
    </div>
  ); 
}

export default TripDetailsPage;
