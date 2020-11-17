import React from "react";
import {
  BigButton,
  Header,
  ButtonHeader,
  DivBigButton,
  H2Home,
  DivContainer,
  DivH1Header,
} from "./styled";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();

  const goToFormPage = () =>{
    history.push("/escolherviagem");
  }

  const goToLoginPage = () =>{
    history.push("/login")
  }


  return (
    <DivContainer>
      <Header>
        <DivH1Header>
          <h1> Labe-X</h1>
        </DivH1Header>
        <ButtonHeader onClick={goToLoginPage}>
          {" "}
          Login Administrador{" "}
        </ButtonHeader>
      </Header>

      <div>
        <H2Home>
          {" "}
          Olá, somos a Labe-X, uma empresa especializada em recrutamento para
          viagens espaciais, clique no botão de acordo com a sua necessidade.{" "}
        </H2Home>

        <DivBigButton>
          <BigButton onClick={goToFormPage}>
            <h3>Quero me inscrever em uma viagem espacial!!! </h3>
          </BigButton>
        </DivBigButton>
      </div>
    </DivContainer>
  );
  

}

export default HomePage;
