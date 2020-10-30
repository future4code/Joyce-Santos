import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import playlists from './components/playlists.js';
import Playlists from './components/playlists.js';
import ListaPlaylists from './components/listaPlaylists.js';


class App extends React.Component {
  state = {
    lista: true,
    botao: "Ir para suas Playlists",
  };

  irParaLista = () => {
    if (this.state.lista) {
      this.setState({ lista: true });
      this.setState({ botao: "Voltar para Home" });
    // }else {
    //   this.setState({lista: false});
    //   this.setState({botao: "Ir para suas Playlists" });
    }
  };

  render() {
    const renderizaLista = () => {
      if (this.state.lista) {
        return <Playlists />;
      }else{
        return <ListaPlaylists />
      }
    };
    return (
      <div>
        <h1>AstroFy</h1>
        <button onClick={this.irParaLista}>{this.state.botao}</button>
        <div>{renderizaLista}</div>

        <Playlists />
      </div>
    );
  }
}
 
export default App;
