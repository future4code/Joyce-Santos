import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

       {
        nomeUsuario: 'jooyroberta',
        fotoUsuario: 'https://th.bing.com/th/id/OIP.evMj5UvJT308tvG9Ms2-VwHaFj?w=236&h=180&c=7&o=5&pid=1.7',
        fotoPost: 'https://th.bing.com/th/id/OIP.T8CrFTcCm9YclhEu7R_M4AHaFj?w=210&h=180&c=7&o=5&pid=1.7'
      },
       {
        nomeUsuario: 'baphometinho',
        fotoUsuario: 'https://th.bing.com/th/id/OIP.Xt8CzB8K2qOquOkHiQpcswHaFj?w=268&h=200&c=7&o=5&pid=1.7',
        fotoPost: 'https://th.bing.com/th/id/OIP.wWN4IqS2TzoOzlwJUIDGEAHaHa?w=168&h=180&c=7&o=5&pid=1.7'
      }
    ], 
    
  valorInputUsuario:"",
  valorInputFotoUsuario:"",
  valorInputFotoPost:""

  };

  adicionaPost = () =>{
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({posts: novoPosts})
    this.setState({valorInputUsuario:""})
    this.setState({valorInputFotoUsuario:""})
    this.setState({valorInputFotoPost:""})

  };

  onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value});

  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value});

  };

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value});

  };

  EstilizaDivInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  padding: 20px;
`
 EstilizaInput = styled.input`
  padding: 5px;
`

  EstilizaBotao = styled.button`
  background-color: magenta;
  padding: 5px
  `

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return(
        <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <this.EstilizaDivInputs> 
          <this.EstilizaInput
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Digite seu nome de usuário."}
          />
          <this.EstilizaInput
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Coloque aqui sua foto de usuário."}
          />
          <this.EstilizaInput
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Insira aqui a foto que você quer publicar."}
          />
          <this.EstilizaBotao onClick={this.adicionaPost}>Postar</this.EstilizaBotao>
           </this.EstilizaDivInputs>
           {listaDePosts}
        </div>
          
    );
  }
}


export default App;
