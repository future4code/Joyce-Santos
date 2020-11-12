import React, { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components'
import TelaMatch from './components/TelaMatch.js'
import TelaPerfil from './components/TelaPerfil'

function App() {
  const [mostraTela, setMostraTela] =  useState(false)

  const abrirTelaMatch = () =>{
    if (!mostraTela){
      return(
        <TelaMatch/>
      )
    }else {
      return(
        <TelaPerfil />
      ) 
      
    }
   
  }

  const mudaEstado = () =>{
    setMostraTela(!mostraTela)
  }

  
  return (
    <div>
      <button onClick={mudaEstado}>ABRIR LISTA MATCH</button>
      {abrirTelaMatch()}

      
    </div>
  );
}

export default App;
