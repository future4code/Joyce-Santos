import React from "react";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../constants/constants";
import { useProtectPage } from "../hooks/useProtectPage";
import { useRequestData } from "../hooks/useRequestData";
import { CardPosts, CreatePostContainer } from "../styled/styled";
import { createPosts } from "../constants/user";
import {useForm} from "../hooks/useForm"
import { goToDetailsPosts } from "../routers/coordinator";

function FeedPage() {
  const history = useHistory();
  const { form, onChange } = useForm({ title: "", text: "" });
  useProtectPage();

  const posts = useRequestData(`${baseUrl}/posts`, []);

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPosts(form, history);
  };

  return (
    <div>
      <CreatePostContainer>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={form.title}
            onChange={handleInputChange}
            placeholder={"Titulo do Post"}
          ></input>

          <input
            name="text"
            value={form.text}
            onChange={handleInputChange}
            placeholder={"Texto do Post"}
          ></input>
          <button type={"submit"}>Postar</button>
        </form>
      </CreatePostContainer>
      {posts.map((post) => {
        return (
          <CardPosts key={post.id}>
            <h2>{post.title}</h2>
            <h4>{post.username}</h4>
            <p>{post.text}</p>
            <p>{post.userVoteDirection}</p>
            <p>{post.votesCount}</p>
            <button onClick={() => {goToDetailsPosts(history)}}>Detalhes do Post</button>
          </CardPosts>
        );
      })}
    </div>
  );
}

export default FeedPage;
