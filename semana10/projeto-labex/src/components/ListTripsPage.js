import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {Header, ButtonHeader} from './styled'

function ListTripsPage() {
const history =useHistory()

   const goToHomeAdm = () => {
     history.push("/homeAdm");
   };
  return (
    <div>
      <Header>
        <h1>Labe-X</h1>
        <ButtonHeader onClick={goToHomeAdm}> Voltar para Home </ButtonHeader>
      </Header>

      <p>Lista das Viagens Disponíveis</p>
    </div>
  ); 
}

export default ListTripsPage;
