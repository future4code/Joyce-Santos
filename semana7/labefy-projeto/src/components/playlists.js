import React from "react";
import axios from "axios";
import styled from "styled-components";
import DetalhePlaylist from "./detalhePlaylist.js";
import CriarPlaylists from "./criarPlaylists.js";

const BotaoDel = styled.button`
margin-left: 10px;
background-color: magenta;

`

const DivContainer = styled.div`
  margin-top: 10px ;
  margin-bottom: 10px;
`;

class Playlists extends React.Component {
  state = {
    playlists: [],
    detalhePlaylist: false,
    faixas: [],
    nomePlaylist: "",
    idPlaylist: "",
    quantidadeFaixas: ""
  };

  componentDidMount() {
    this.getPlaylist();
  }

  detalheDisplay = () =>{
      this.setState({detalhePlaylist: !this.state.detalhePlaylist})
  }

  getPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "joyce-santos-dumont",
          },
        }
      )
      .then((response) => {
            const list = response.data.result.list
            this.setState({playlists: list })
        }).catch((err) => {
            console.log(err.message)
        })
    }

   getFaixasPlaylist = (id, name) =>{
       this.detalheDisplay();

    axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,{
          headers:{
              Authorization: "joyce-santos-dumont",
          },
      }
    )
    .then((response)=>{
        const quantity = response.data.result.quantity
        const list = response.data.result.tracks
        console.log(list)
        this.setState({faixas: list})
        this.setState({ quantidadeFaixas: quantity });
        this.setState({ idPlaylist: id});
        this.setState({ nomePlaylist: name });  
    })
    .catch((error)=>{
        console.log(error.message)
    })
   }
      
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
        this.getPlaylist();
      })
      .catch((error) => {
        alert("Não foi possível deletar esta playlist!");
      });
  };

    

  render() {
      const renderizaPlaylists = this.state.playlists.map((playlist) =>{
          return(
              <div key={playlist.id}>
                  <span onClick={() => this.getFaixasPlaylist(playlist.id, playlist.name)}>{playlist.name}</span>  
                  <BotaoDel onClick={() => {
              this.deletaPlaylist(playlist.id)}}>X</BotaoDel>
        </div>
          )
      })
    return (
      <div>
        <DivContainer>
          <CriarPlaylists getPlaylist={this.getPlaylist} />
          <h3> Minhas Playlists</h3>
        </DivContainer>

        {renderizaPlaylists}
        {this.state.detalhePlaylist ? (
          <DetalhePlaylist
            voltar={this.detalheDisplay}
            nomePlaylist={this.state.nomePlaylist}
            faixas={this.state.faixas}
            idPlaylist={this.state.idPlaylist}
            getFaixasPlaylist={this.state.getFaixasPlaylist}
            quantity={this.state.quantidadeFaixas}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Playlists;
