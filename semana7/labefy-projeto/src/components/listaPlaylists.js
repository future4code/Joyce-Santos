import React from "react";
import axios from "axios";
import styled from "styled-components";

class ListaPlaylists extends React.Component {
  state = {
    minhasPlaylists: [],
  };

  componentDidMount = () => {
    this.mostrarListas();
  };

  mostrarListas = () => {
    const body = {
      id: "",
      name: "",
    };
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
        {
          headers: {
            Authorization: "joyce-santos-dumont",
          },
        }
      )
      .then((resposta) => {
        this.setState({ minhasPlaylists: resposta.data.result.list });
        console.log("RAAAAAU", resposta);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deletaPlaylist =(id) => {
      axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,{
            headers: {
                Authorization: "joyce-santos-dumont"
            },
        }
      )

      .then(()=>{
          alert("Playlist Deletada!")
          this.renderizaListas()
      })
      .catch((error)=>{
          alert("Não foi possível deletar esta playlist!")
      })

  }

  render() {
    const renderizaListas = this.state.minhasPlaylists.map((playlist) => {
      return (
        <p key={playlist.id}> {playlist.name} 
        <button onClick={() => {this.deletaPlaylist(playlist.id);}}>X</button>
        </p>
      );
    });
    return (
      <div>
        <h3>Minhas Playlists</h3>
        {renderizaListas()}
        
      </div>
    );
  }
}

export default ListaPlaylists;
