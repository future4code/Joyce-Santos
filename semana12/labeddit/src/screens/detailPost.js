import React from "react";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../constants/constants";
import { useProtectPage } from "../hooks/useProtectPage";
import { useRequestData } from "../hooks/useRequestData";

function PostDetailPage(id) {
  const history = useHistory()
     useProtectPage()

const detailsPosts = useRequestData(`${baseUrl}/posts/${id}`, [])


  return <div>
      AQUI É A PÁGINA DE DETALHES DE POSTS
  </div>;
}

export default PostDetailPage;
