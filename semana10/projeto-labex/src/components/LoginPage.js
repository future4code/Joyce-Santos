import React from "react";
import { useHistory } from "react-router-dom";
import {  Header, ButtonHeader } from "./styled";


function LoginPage() {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToHomeAdm = () => {
    history.push("/homeadm");
  };


  return (
    <div>
      <Header>
        <h1>Labe-X</h1>
        <ButtonHeader onClick={goToHome}> Voltar </ButtonHeader>
      </Header>

      <div>
        <p>Já faz parte da nossa comunidade? Faça o Login</p>

        <input placeholder={"Nome"}></input>

        <input placeholder={"E-mail"}></input>

        <button onClick={goToHomeAdm}>Entrar</button>
      </div>
    </div>
  );
}

export default LoginPage;
