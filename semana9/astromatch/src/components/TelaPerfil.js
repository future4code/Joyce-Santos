import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function Perfil(props) {
  const [perfil, setPerfil] = useState([])

  useEffect(()=>{
    mostrarPerfil()
  },[perfil])

  const mostrarPerfil = () =>{
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joyce/person")
    .then((response) =>{
      setPerfil(response.data.profile)
    }).catch((error)=>{
      console.log(error.message)
    })
  }

  const escolhePessoa = () =>{
const body = {
  id: perfil.id,
  choice: true
}
    axios.post(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joyce/choose-person"
    , body,
    )

    .then((resposta)=>{
      mostrarPerfil()
  })
  .catch((error)=>{
    console.log(error.message)
  })

  

  return (
    <div>
      <header>
        <h1>Astromatch</h1>
      </header>
        TESTE PERFIL
    </div>
  );
  }
  }



export default Perfil;
