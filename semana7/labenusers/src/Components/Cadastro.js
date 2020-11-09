import React from "react";
import styled from "styled-components";
import axios from "axios";

const Botao = styled.button`
background-color: magenta;
margin-top: 5px;
margin-left: 5px;
`

class Cadastro extends React.Component {
  state = {
    name: "",
    email: "",
    nameValue: "",
    emailValue: "",
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
        alert("Ae! Usuário adicionado!!!");
      })
      .catch((error) => {
        alert("Opa! Algo errado não está certo!");
      });
  };


  onChangeInputName = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ emailValue: event.target.value });
  };

  render() {
    return (
      <div>
        <h3> Cadastro </h3>
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
        

        <Botao onClick={this.adicionarUsuario}>Cadastrar Usuário</Botao>
      </div>
    );
  }
}

export default Cadastro


