import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './components/img-labedin/perfil.jpeg';
import moonton from './components/img-labedin/Mobilelegends.png';
import skoob from './components/img-labedin/logo-footer4.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './components/img-labedin/email.png';
import local from './components/img-labedin/local.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto}
          nome="Joyce" 
          descricao="Oi, eu sou a Joyce. Sou estudante do curso de Web FullStack da Labenu. Adoro ler e jogar video-games, odeio o CSS com toda a minha alma."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="card-pequeno">
        <CardPequeno  
          imagem={email}
          email= "E-mail"
          descricao="joyceroberta@skoobnews.com.br"
          />
      </div> 

      <div className="card-pequeno">
        <CardPequeno
          imagem={local}
          local="Endereço"
          descricao="Rua dos livros, 666 - Jardim dos Games."
        
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={skoob} 
          nome="Skoob" 
          descricao="Crítica resenhista, avaliando os livros hots com 0,5 estrelas" 
        />
        
        <CardGrande 
          imagem={moonton}
          nome="Moonton" 
          descricao="Passando raiva no Mobile Legends: Bang-Bang todas as noites." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
