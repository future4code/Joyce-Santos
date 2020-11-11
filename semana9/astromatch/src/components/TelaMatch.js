import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

function TelaMatch(){
    const [match, setMatch] = useState([])

    const mostraMatch = () =>{
        axios.get(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joyce/matches"
        )
        .then((resposta) =>{
            setMatch(resposta.data.matches)
        }).catch((error)=>{
            console.log(error.message)
        })
    }


    return (
      <div>
        {mostraMatch()}
        AQUI VÃO APARECER OS MATCHS
      </div>
    );
}

export default TelaMatch;