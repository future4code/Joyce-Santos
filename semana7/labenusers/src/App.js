import React from 'react';
import styled from 'styled-components';
import ListaDeUsuarios from './Components/ListaDeUsuarios.js';
import axios from 'axios';
import Cadastro from './Components/Cadastro.js'

const AppContainer = styled.div`
display: flex;
justify-content: center;
text-align: center;

`

const Botao = styled.button`
  background-color: magenta;
  margin-top: 5px;
  margin-left: 5px;
`;

class App extends React.Component {
  state = {
    registroUsuario: true,
    botao: "Exibir Lista de Usuários",
  };

  irParaListaUsuarios = () => {
    if (this.state.registroUsuario) {
      this.setState({ registroUsuario: false });
      this.setState({ botao: "Cadastro de Novos Usuários" });
    } else {
      this.setState({ registroUsuario: true });
      this.setState({ botao: "Mostrar Usuários" });
    }
  };

  render() {
    const randerizaUsuario = () => {
      if (this.state.registroUsuario) {
        return <Cadastro />;
      } else {
        return <ListaDeUsuarios />;
      }
    };
    return (
      <div>
        <Botao onClick={this.irParaListaUsuarios}>
          {this.state.botao}{" "}
        </Botao>
        <AppContainer>
          <div>{randerizaUsuario()}</div>
        </AppContainer>
      </div>
    );
  }
}


export default App;
