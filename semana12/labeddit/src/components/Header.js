import React from "react";
import { useHistory } from "react-router-dom";


function Header(){
const history = useHistory()
return (
  <div>
    <h1>LabEddit</h1>
    <p>A sua melhor rede social!</p>
  </div>
);
}
export default Header;