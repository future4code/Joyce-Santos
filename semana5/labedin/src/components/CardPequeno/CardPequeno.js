import React from 'react';
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div> 
        <div className="small-card">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.email }</h4>
                <h4>{props.local}</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>

        </div>

    );
}

export default CardPequeno;