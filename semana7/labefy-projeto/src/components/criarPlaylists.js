import React from "react";
import axios from "axios";
import styled from "styled-components";

const Botao = styled.button`
margin-left: 10px;
background-color: magenta;

`
const DivContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

class CriarPlaylists extends React.Component {
  state = {
    nomeValue: "",
  };

  onChangeInput = (event) => {
    this.setState({ nomeValue: event.target.value });
  };

  criaPlaylist = () => {
    const body = {
      name: this.state.nomeValue,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "joyce-santos-dumont",
          },
        }
      )
      .then((resposta) => {
        this.setState({ nomeValue: "" });
        alert("Playlist criada com Sucesso!!!");
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Opa! Algo deu errado! Verifique se já não há uma Playlist com este nome."
        );
      });
  };

    deletaPlaylist = (id) => {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          {
            headers: {
              Authorization: "joyce-santos-dumont",
            },
          }
        )

        .then(() => {
          alert("Playlist Deletada!");
          this.renderizaListas();
        })
        .catch((error) => {
          alert("Não foi possível deletar esta playlist!");
        });
    };

  render() {
    return (
      <DivContainer>
        <h3>Criar Playlist</h3>
        <input
          placeholder={"Digite aqui o nome da sua nova playlist."}
          value={this.state.nomeValue}
          onChange={this.onChangeInput}
        ></input>
        <Botao onClick={this.criaPlaylist}>Clique para Criar Playlist</Botao>
      </DivContainer>
    );
  }
}

export default CriarPlaylists;
