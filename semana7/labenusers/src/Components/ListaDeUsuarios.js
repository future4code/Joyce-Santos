import React from "react";
import Styled from "styled-components";
import axios from "axios";
import App from "../App.js"

class ListaDeUsuarios extends React.Component {
    state = {
      usuarios: [],

    }

    // componentDidMount = () => {
    //   this.mostraUsuario
    // }

    mostraUsuario = () => {
      axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers:{
          Authorization: "joyce-santos-dumont"
        },
      }
    )
    
    .then((resposta) => {
      this.setState({usuarios: resposta.data})
    
    })

    .catch((error) => {
      alert("Hummm, não deu pra mostrar a lista de usuários!")
    })

    }

  render() {
    // const randerizaUsuario () =>{

    // }
    return(

      <h1> Lista de Usuarios Cadastrados</h1>

    )
    
  }
}


export default ListaDeUsuarios;
