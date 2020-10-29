import React from "react";
import styled from "styled-components";
import axios from "axios";

const DivContainer = styled.div`
  background-color: magenta;
  width: 100%;
  height: 600px;
`;

const Botao = styled.button`
display: flex;
padding: 20px;

`

const DivAtividades = styled.div`
  display: flex;
  flex-direction: column;
 
  
`;

class App extends React.Component {
  state = {
    atividades: null,
  };

  buscaAtividade = () => {
    const linkApi = "http://www.boredapi.com/api/activity/";
    axios.get(linkApi).then((response) => {
      this.setState({ atividades: response.data });
    });
  };

  render() {
    return (
      <DivContainer>
        <h1> Olá! Bem Vinde!!!</h1>
        <h3>
          Este é um aplicativo que sugere atividades diversas para realizar
          quando estiver entediade.
        </h3>
        <p>
          Clique no botão abaixo para sortear uma atividade aleatória e bom
          aproveito!.
        </p>
        
          <div>
            <Botao onClick={this.buscaAtividade}> Random de Atividades</Botao>
          </div>

          {this.state.atividades && (
            <DivAtividades>
              <p>Nome:{this.state.atividades.activity}</p>
              <p>Tipo:{this.state.atividades.type}</p>
              <p>Acessibilidade:{this.state.atividades.accessibility}</p>
              <p>
                Numero de Participantes:{this.state.atividades.participants}
              </p>
              <p>Preço: {this.state.atividades.price}</p>
            </DivAtividades>
          )}
        </DivContainer>
      
    );
  }
}

export default App;
