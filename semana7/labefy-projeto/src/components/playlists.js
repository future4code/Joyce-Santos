import React from "react";
import axios from "axios";
import styled from "styled-components";

class Playlists extends React.Component {
  state = {
    newPlaylist: [],
    playlistValue: "",
  };



  criaPlaylists = () => {
    const body = {
      name: this.state.playlistValue,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "joyce-santos-dumont",
          },
        }
      )
      .then((resposta) => {
        this.setState({ playlistValue: "" });
        this.criaPlaylists();
        alert("Playlist criada com Sucesso!!!")
      })
      .catch((error) => {
        alert("Opa! Algo deu errado!")
      });
  };
  onChangeInput = (event) => {
    this.setState({ playlistValue: event.target.value });
  };

  render() {
      const renderizaPlaylists = this.state.newPlaylist.map((playlist) =>{
          return <p key={playlist.id}>{playlist.name}</p>
      });

    return (
      <div>
        <div>
          <h3>Criar Playlist</h3>
          <input
            placeholder={"Digite aqui o nome da sua nova playlist."}
            value={this.state.playlistValue}
            onChange={this.onChangeInput}
          ></input>
          <button onClick={this.criaPlaylists}>
            Clique para Criar Playlist
          </button>
        </div>
        {renderizaPlaylists}
      </div>
    );
  }
}

export default Playlists;
