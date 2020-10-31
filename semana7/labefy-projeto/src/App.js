import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Playlists from './components/playlists.js';
import './App.css'

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding-left: 10px;
  background-color: #7fffd4;
`;







class App extends React.Component {
  

  render() {
   
    return (
      <AppContainer>
        <h1>Bem Vindes ao LabeFy!!!</h1>
        <Playlists />
        </AppContainer>
    );
  }
}
 
export default App;
