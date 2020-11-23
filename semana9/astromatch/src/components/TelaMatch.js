import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import lixo from './img/lixo.png'

const Imagem = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 15px;
  
`;

const ImgLixo = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 310px;
  :hover {
    cursor: pointer;
  }
`;

const TextMatches = styled.p`
text-align: center;

`

const Matches = styled.div`
margin-left: 10px;


`




function TelaMatch(){
    const [match, setMatch] = useState([])

    useEffect(()=>{
      mostraMatch()
    }, [match])

    const mostraMatch = () =>{
        axios.get(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joyce-santos/matches"
        )
        .then((resposta) =>{
            setMatch(resposta.data.matches)
        }).catch((error)=>{
            console.log(error.message)
        })
    }

    const onClickLimpar = () =>{
      axios.put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joyce-santos/clear"
      )
      .then(()=>{
        alert("Tudo Limpinho!")
        mostraMatch()
      })
      .catch((error)=>{
        console.log(error.message)
      })
    }

    const renderizaMatch = match.map((perfil) => {
        return (
          <p key={perfil.id}>
            {" "}
            <Imagem img src={perfil.photo} /> {perfil.name}
          </p>
        );
      })


    return (
      <div>
        <TextMatches>
          <h1>Astromatch</h1>
          <b>Aqui estão os seus Matches!</b>{" "}
        </TextMatches>
        <Matches>{renderizaMatch}</Matches>

        <ImgLixo img src={lixo} onClick={onClickLimpar} />
      </div>
    );
}

export default TelaMatch;