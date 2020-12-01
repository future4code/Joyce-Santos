import React from "react";
import {useProtectPage} from "../hooks/useProtectPage"

function FeedPage() {
  useProtectPage();
  return <div>
      AQUI É A PAGINA DE FEED
  </div>;
}

export default FeedPage;
