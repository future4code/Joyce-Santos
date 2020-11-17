import React from "react";
import { useHistory } from "react-router-dom";
import { Header, ButtonHeader } from "./styled";

function HomeAdmPage() {
    const history = useHistory()

    const goToCreateTripPage =() =>{
        history.push("/novasviagens")
    }

    const goToListTripsPage = () =>{
        history.push("/listaviagens")
    }

    const goToTripApprovalPage = () =>{
        history.push("/aprovarinscricoes");
    }

     const goToHome = () => {
       history.push("/");
     };
 

  return (
    <div>
      <Header>
        <h1>Labe-X</h1>
        <ButtonHeader onClick={goToHome}> Voltar para Home </ButtonHeader>
      </Header>
      <div>
        <p>
          Bem Vindo Administrador, aqui você poderá vizualizar e criar novas
          viagens, além de listar, aprovar ou rejeitar novas candidaturas.
        </p>

        <button onClick={goToCreateTripPage}>Cadastrar Novas Viagens</button>

        <button onClick={goToListTripsPage}>
          Listar suas viagens cadastradas
        </button>

        <button onClick={goToTripApprovalPage}>
          Listar, aprovar ou rejeitar inscrições
        </button>
      </div>
    </div>
  );
}

export default HomeAdmPage;
