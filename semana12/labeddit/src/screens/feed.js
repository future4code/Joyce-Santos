import React from "react";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../constants/constants";
import { useProtectPage } from "../hooks/useProtectPage";
import { useRequestData } from "../hooks/useRequestData";
import {  CreatePostContainer } from "../styled/styled";
import { createPosts } from "../constants/user";
import {useForm} from "../hooks/useForm"
import PostCard from "../components/postCard";

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
          <PostCard
            id={post.id}
            title={post.title}
            username={post.username}
            text={post.text}
            commentsCount={post.commentsCount}
            votesCount={post.votesCount}
            direction={post.userVoteDirection}
          />
        );
      })}
    </div>
  );
}

export default FeedPage;
