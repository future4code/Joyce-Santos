import React from "react";
import { BigButton, Header, ButtonHeader } from "./styled";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();

  const goToApplicationFormPage = () =>{
    history.push("/formulario");
  }

  const goToLoginPage = () =>{
    history.push("/login")
  }


  return (
    <div>
      <Header>
        <h1>Labe-X</h1>
        <ButtonHeader onClick={goToLoginPage}>
          {" "}
          Login Administrador{" "}
        </ButtonHeader>
      </Header>

      <div>
        <p>
          {" "}
          Olá, somos a Labe-X, uma empresa especializada em recrutamento para
          viagens espaciais, clique no botão de acordo com a sua necessidade.{" "}
        </p>

        <BigButton onClick={goToApplicationFormPage}>
          Quero me inscrever em uma viagem espacial!!!
        </BigButton>
      </div>
    </div>
  );
  

}

export default HomePage;
