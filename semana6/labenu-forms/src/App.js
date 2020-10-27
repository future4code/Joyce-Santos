import React from 'react';
import DadosGerais from './components/DadosGerais';
import ComSuperior from './components/ComSuperior';
import SemSuperior from './components/SemSuperior';
import Agradecimento from './components/Agradecimentos';

class App extends React.Component {
  state = {
    etapa: 1,
  };

  proximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  randerizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <DadosGerais />;
      case 2:
        return <ComSuperior />;
      case 3:
        return <SemSuperior />;
      case 4:
        return <Agradecimento />;
    }
  };

  render() {
    return (
      <div>
        {this.randerizaEtapa()}
        {this.state.etapa !== 4 &&
        <button onClick={this.proximaEtapa}> Próxima Etapa</button>
        }
      </div>
    );
  }
}


export default App;