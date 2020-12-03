import React from "react";
import { useHistory } from "react-router-dom";
import { goToDetailsPosts } from "../routers/coordinator";
import { CardPosts } from "../styled/styled";
import { votePost } from "../constants/user";

function PostCard(props) {
  const history = useHistory();

  const handleVote = (decision) => {
    const body = {
      direction: decision,
    };

    votePost(body, props.id);
  };

const like = () => {
  if (props.direction === 0) {
    return (
      <div>
        <button onClick={() => handleVote(1)}>Votar</button>
        <p>Votos: {props.votesCount}</p>
        
      </div>
    );
  } else if (props.direction === 1) {
    return (
      <div>
        <button onClick={() => handleVote(0)}>Votar</button>
        <p>Votos: {props.votesCount}</p>
        
      </div>
    );
  } else {
    <div>
      <button onClick={() => handleVote(1)}>Votar</button>
      <p>Votos: {props.votesCount}</p>
      
    </div>;
  }
};

  return (
    <CardPosts>
      <h3>{props.username}</h3>
      <h1> {props.title}</h1>
      <p> {props.text} </p>
       {like()} 
      <p> {props.commentsCount} Comentários </p>

      <button onClick={() => goToDetailsPosts(history, props.id)}>
        Detalhes do Post
      </button>
    </CardPosts>
  );
}

export default PostCard;
