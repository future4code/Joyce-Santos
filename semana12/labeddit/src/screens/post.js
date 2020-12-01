import React from "react";
import { useProtectPage } from "../hooks/useProtectPage";

function PostPage() {
   useProtectPage();
  return <div>
      AQUI É A PÁGINA DE POSTS
  </div>;
}

export default PostPage;
