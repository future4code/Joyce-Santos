import React from 'react';
import styled from 'styled-components';
import ListaDeUsuarios from './Components/ListaDeUsuarios.js';
import axios from 'axios';
import Cadastro from './Components/Cadastro.js'

class App extends React.Component {
  state = {
        registroUsuario: true

  }

  irParaListaUsuarios = () =>{
    this.setState({
      registroUsuario: false,
    });

  }


  

  render(){
    const randerizaUsuario = () =>{
      if (this.state.registroUsuario) {
        return;
      } 
    }
     return (
       <div>
         <button onClick={ListaDeUsuarios}>Ir para Usuários Cadastrados</button> 
         <Cadastro>

         </Cadastro>
         
         {randerizaUsuario()}
        
       </div>
     );

  }
}


export default App;
