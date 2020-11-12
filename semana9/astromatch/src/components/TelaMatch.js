import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Imagem = styled.img`
width: 200px;
height: 300px;
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

    const renderizaMatch = match.length ? (
      match.map((perfil) => {
        return (
          <li key={perfil.id}>
            {" "}
            <Imagem img src={perfil.photo} /> {perfil.name}
          </li>
        );
      })
    ) : 
      <p></p>

    return (
      <div>
        {renderizaMatch}
        <p>AQUI VÃO APARECER OS MATCHS </p>
        <button onClick={onClickLimpar}>Limpar</button>
      </div>
    );
}

export default TelaMatch;