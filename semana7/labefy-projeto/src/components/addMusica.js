import React from "react";
import axios from "axios";
import styled from "styled-components";

const Botao = styled.button`
  margin-left: 10px;
  background-color: magenta;
`

class AddMusica extends React.Component {
  state = {
    nomeValue: "",
    artistaValue: "",
    urlValue: "",
  };

  onChangeNome = (event) => {
    this.setState({ nomeValue: event.target.value });
  };

  onChangeArtista = (event) => {
    this.setState({ artistaValue: event.target.value });
  };

  onChangeUrl = (event) => {
    this.setState({ urlValue: event.target.value });
  };

  addFaixa = (id) =>{
      const body ={
          name: this.state.nomeValue,
          artist: this.state.artistaValue,
          url: this.state.urlValue
      }

      axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, {
            headers: {
            Authorization: "joyce-santos-dumont",
          },
        }
      )
      .then(() =>{
          this.setState({nomeValue: "", artistaValue:"", urlValue:""})
          this.props.getPlaylistsFaixas()
      }).catch((error)=>{
          console.log(error.message)
      })
  }

  render() {
    return (
      <div>
        <input
          placeholder="Nome da Música"
          value={this.state.nomeValue}
          onChange={this.onChangeNome}
        />
        <input
          placeholder="Artista"
          value={this.state.artistaValue}
          onChange={this.onChangeArtista}
        />
        <input
          placeholder="Url da Música em mp3"
          value={this.state.urlValue}
          onChange={this.onChangeUrl}
        />
        <Botao onClick={() => {this.addFaixa(this.props.idPlaylist)}}>
          Adicionar Faixa!
        </Botao>
      </div>
    );
  }
}

export default AddMusica;