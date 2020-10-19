import React from "react";

class DadosGerais extends React.Component {
  render() {
    return (
    <div>

        <h1> Etapa 1 - Dados Gerais </h1>;

        <div>
          <p> 1. Qual seu nome? </p>
          <input></input>
        </div>
    
        <div>
          <p> 2. Qual sua idade? </p>
          <input></input>
        </div>

        <div>
          <p> 3. Qual seu e-mail? </p>
          <input></input>
        </div>

        <div>
          <p> 4. Qual sua escolaridade? </p>
          <select>
            <option> Ensino médio incompleto </option>
            <option> Ensino médio completo </option>
            <option> Ensino superior incompleto </option>
            <option> Ensino superior completo </option>
          </select>
        </div>

    </div>
    );
  }
}

export default DadosGerais;
