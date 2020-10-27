import React from "react";
import Styled from "styled-components";
import axios from "axios";


class ListaDeUsuarios extends React.Component {
    state = {
      usuarios: [],

    }

    componentDidMount = () => {
      this.mostraUsuario()
    }

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
      console.log(resposta)
    
    })

    .catch((error) => {
      alert("Não foi possível exibir")
      
    })

    }

  render() {
    const randerizaUsuario = this.state.usuarios.map((usuario) =>{
      return <p key={usuario.id}> {usuario.name} </p>

    })
    return (
      <div>
        <h1>Lista de Usuários Cadastrados</h1>
        {randerizaUsuario}
      </div>
    );
    
  }
}


export default ListaDeUsuarios;
