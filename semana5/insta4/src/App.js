import React from 'react';
import './App.css';
import Post from './components/Post/Post';

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

  }
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
       {listaDePosts}


      </div>
     
    );
  }
}


export default App;
