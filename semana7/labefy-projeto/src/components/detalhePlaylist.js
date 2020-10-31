import React from "react";
import axios from "axios";
import styled from "styled-components";
import AddMusica from "./addMusica.js";

const Botao = styled.button`
  margin-left: 10px;
  background-color: magenta;
`;


class DetalhePlaylist extends React.Component {
  
  render() {
    const mapFaixas = this.props.faixas.map((faixa) => {
      return (
        <div>
          <audio src={faixa.url} controls />
          <p>
            <strong> Nome da Múcisa:</strong> {faixa.name}
          </p>
          <p>
            <strong> Artista:</strong> {faixa.artist}
          </p>
        </div>
      );
    });
    const renderCorreta =
      this.props.quantity !== 0 ? mapFaixas : <p>Vamos adicionar algumas músicas?</p>;
    return (
      <div>
        <Botao onClick={this.props.voltar}>Home</Botao>
        <h1>{this.props.nomePlaylist}</h1>
        {renderCorreta}
        <AddMusica
          idPlaylist={this.props.idPlaylist}
          getFaixasPlaylist={this.props.getFaixasPlaylist}
        />
      </div>
    );
  }
}

export default DetalhePlaylist;
