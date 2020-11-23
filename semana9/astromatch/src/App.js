import React, { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components'
import TelaMatch from './components/TelaMatch.js'
import TelaPerfil from './components/TelaPerfil'
import Mudar from './components/img/relacao.png'

const AppContainer = styled.div`
display: flex;
justify-content: center;



`
const CardPerfis = styled.div`
  border: 2px black;
  background-color: magenta;
  width: 350px; 
  height: 100%;
  justify-content: center;
  border: 5px;
  border-style: dotted;
  
`;

const Imagem = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 300px;
  :hover {
    cursor: pointer;
  }
`;



function App() {
  const [mostraTela, setMostraTela] =  useState(false)

  const abrirTelaMatch = () =>{
    if (!mostraTela){
      return(
        <TelaPerfil/>
      )
    }else {
      return(
        <TelaMatch/>
      ) 
      
    }
   
  }

  const mudaEstado = () =>{
    setMostraTela(!mostraTela)
  }

  
  return (
    <AppContainer>
      <CardPerfis>
        <Imagem img src={Mudar} onClick={mudaEstado} />
        {abrirTelaMatch()}
      </CardPerfis>
    </AppContainer>
  );
}

export default App;
