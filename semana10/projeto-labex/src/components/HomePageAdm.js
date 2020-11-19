import React from "react";
import { useHistory } from "react-router-dom";
import {
  Header,
  ButtonHeader,
  DivH1Header,
  AdmButtons,
  H2Home,
  DivButtonHome,
  DivContainer,
} from "./styled";
import { useProtectPage } from "./hooks/useProtectPage"; 

function HomeAdmPage() {
    const history = useHistory()

    const goToCreateTripPage =() =>{
        history.push("/novasviagens")
    }

    const goToListTripsPage = () =>{
        history.push("/listaviagens")
    }

    // const goToTripApprovalPage = (tripId) => {
    //   history.push(`/aprovarinscricoes/${tripId}`);
    // }

      const goToHome = () => {
        history.push("/");
      };

      useProtectPage();

      return (
        <DivContainer>
          <Header>
            <DivH1Header>
              <h1>Labe-X</h1>
            </DivH1Header>

            <ButtonHeader onClick={goToHome}> Voltar para Home </ButtonHeader>
          </Header>

          <div>
            <H2Home>
              Bem Vindo Administrador, aqui você poderá vizualizar e criar novas
              viagens, além de listar, aprovar ou rejeitar novas candidaturas.
            </H2Home>

            <DivButtonHome>
              <AdmButtons onClick={goToCreateTripPage}>
                Cadastrar Novas Viagens
              </AdmButtons>

              <AdmButtons onClick={goToListTripsPage}>
                Gerenciar viagens e aprovações
              </AdmButtons>

              {/* <AdmButtons onClick={goToTripApprovalPage}>
                Listar, aprovar ou rejeitar inscrições
              </AdmButtons> */}
            </DivButtonHome>
          </div>
        </DivContainer>
      );
    };


export default HomeAdmPage;
