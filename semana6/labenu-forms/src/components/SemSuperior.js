import React from 'react';

class SemSuperior extends React.Component {
  render(){
    return(
    <div> 
    <h2> Etapa 3 - Informações gerais de ensino</h2>;

    <div>
        <p> 5. Por que você não terminou um curso de graduação? </p>
        <input></input>
    </div>;

    <div>
        <p> 6. Você fez algum curso complementar? </p>
        <select> 
            <option>Nenhum</option>
            <option>Curso Técnico</option>
            <option>Curso de Inglês</option>
        </select>
    </div>
    </div>
    );
        
}
}

export default SemSuperior;