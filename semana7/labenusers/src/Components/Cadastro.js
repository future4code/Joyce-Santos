import React from "react";
import Styled from "styled-components";
import axios from "axios";
import App from "../App.js"

class Cadastro extends React.Component {
  state = {
    name: "",
    email: "",
    nameValue: "",
    emailValue: "",
  };

  componentDidMount = () => {
    this.pegarUsuario();
  };

  adicionarUsuario = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "joyce-santos-dumont",
          },
        }
      )
      .then((resposta) => {
        this.setState({ nameValue: "" });
        this.setState({ emailValue: "" });
        console.log(resposta.message);
        alert("Ae! Usuário adicionado!!!");
      })
      .catch((error) => {
        console.log(error.data);
        alert(error.message);
      });
  };

  pegarUsuario = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "joyce-santos-dumont",
          },
        }
      )

      .then((resposta) => {
        this.setState({ name: resposta.data });
        this.setState({ email: resposta.data });
      });
  };

  onChangeInputName = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ emailValue: event.target.value });
  };

render(){
    return (
      <div>
        <p> Nome: </p>
        <input
          placeholder="Insira o seu nome aqui"
          value={this.state.nameValue}
          onChange={this.onChangeInputName}
        ></input>
        <p> E-mail:</p>
        <input
          placeholder="Insira agora o seu e-mail"
          value={this.state.emailValue}
          onChange={this.onChangeInputEmail}
        ></input>
        <button onClick={this.adicionarUsuario}>Cadastrar Usuário</button>
      </div>
    );
}
}

export default Cadastro


