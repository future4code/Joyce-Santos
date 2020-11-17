import React from "react";
import { useHistory } from "react-router-dom";
import {
  Header,
  ButtonHeader,
  DivH1Header,
  LoginButton,
  DivContainer,
  H2Home,
  DivLogin,
} from "./styled";

function LoginPage() {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToHomeAdm = () => {
    history.push("/homeadm");
  };

  return (
    <DivContainer>
      <Header>
        <DivH1Header>
          <h1>Labe-X</h1>
        </DivH1Header>

        <ButtonHeader onClick={goToHome}> Voltar </ButtonHeader>
      </Header>

      <div>
        <H2Home>Já faz parte da nossa comunidade? Faça o Login</H2Home>
        <DivLogin>
          <label>Nome:</label>
          <input placeholder={"Nome"}></input>
          <label>E-mail:</label>
          <input placeholder={"E-mail"}></input>

          <LoginButton onClick={goToHomeAdm}>Entrar</LoginButton>
        </DivLogin>
      </div>
    </DivContainer>
  );
}

export default LoginPage;
