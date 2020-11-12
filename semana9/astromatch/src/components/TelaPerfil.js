import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import like from './img/heart.png'
import deslike from './img/X.png'


const Imagem = styled.img`
  width: 200px;
  height: 250px;
  border: 5px;
  border-style: dotted;
`;

const CardPerfis = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const ImgLikes = styled.img`
  width: 35px;
  height: 35px;
  padding: 5px;
  :hover {
    cursor: pointer;
  }
`;


function TelaPerfil(props) {
  const [perfil, setPerfil] = useState({});
  const [escolhePerfil, setEscolhePerfil] = useState(true)

  useEffect(() => {
    escolherPessoa();
  }, []);

  const escolherPessoa = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joyce-santos/person"
      )

      .then((response) => {
        setPerfil(response.data.profile);
      })
      .catch((error) => {
        window.alert("Show de erro");
      });
  };

  const escolherPerfil = (match) => {
    const body = {
      id: perfil.id,
      choice: match,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joyce-santos/choose-person",
        body
      )

      .then((response) => {
        escolherPessoa();
        
      })
      .catch((error) => {
        window.alert("Erro de escolha");
      });
  };
 

  return (
    <div>
      <CardPerfis>
        <h1>Astromatch</h1>
        <Imagem img src={perfil.photo} />
        <p>
          <b>Nome:</b> {perfil.name}
        </p>
        <p>
          <b>Idade:</b>
          {perfil.age}
        </p>
        <p>
          <b>Bio:</b>
          {perfil.bio}
        </p>
        <div>
          <ImgLikes img src={deslike} onClick={() => escolherPerfil(false)} />
          <ImgLikes img src={like} onClick={() => escolherPerfil(true)} /> 
        </div>
      </CardPerfis>
    </div>
  );
}

export default TelaPerfil;
