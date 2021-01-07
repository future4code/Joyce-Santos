import {React, useEffect} from "react";
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
import {useInput} from './hooks/useInput'
import axios from "axios";

function LoginPage() {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      history.push("/homeadm")
    }
  }, [history])

  const [email, handleEmail] = useInput();
  const [password, handlePassword] = useInput();

  const login = () =>{
    const body={
      email: email,
      password: password,
    }

    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/joyce-dumont/login", body
    )

    .then((response) =>{
      localStorage.setItem("token", response.data.token)
      history.push("/homeadm")
    })
    .catch((error) =>{
      console.log(error.message)

    })
  }

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
          <label>E-mail:</label>
          <input type="email" value={email} onChange={handleEmail}></input>
          <label>Senha:</label>
          <input type="password" value={password} onChange={handlePassword} ></input>

          <LoginButton onClick={login}>Entrar</LoginButton>
        </DivLogin>
      </div>
    </DivContainer>
  );
}

export default LoginPage;
