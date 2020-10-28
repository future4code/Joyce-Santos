import React from "react";
import styled from "styled-components";
import axios from "axios";

const Botao = styled.button`
background-color: magenta;
margin-top: 5px;
margin-left: 5px;
`


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

    deletaUsuario = (id) => {
        axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers:{
            Authorization: "joyce-santos-dumont"
          },

        }
      )
      .then(() =>{
        alert("Tchau Usuário!!!")
      })
      .catch((error)  => {
        alert("Deu ruim aqui também!")

      })

    }

  render() {
    const randerizaUsuario = this.state.usuarios.map((usuario) =>{
      return (
        <p key={usuario.id}> 
          {usuario.name} 
          <Botao onClick={()=>{this.deletaUsuario(usuario.id)}}>Del Usuário</Botao>
        </p>
        )}
      )
    
    return (
      <div>
        <h1>Lista de Usuários Cadastrados</h1>
        {randerizaUsuario}
      </div>
    );
    
  }
}


export default ListaDeUsuarios;
