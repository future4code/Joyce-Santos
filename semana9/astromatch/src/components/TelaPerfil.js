import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Imagem = styled.img`
  width: 200px;
  height: 300px;
`;

function TelaPerfil(props) {
  const [perfil, setPerfil] = useState({});
  const [escolhePerfil, setEscolhePerfil] = useState(false)

  useEffect(() => {
    escolherPessoa();
  }, []);

  const escolherPessoa = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joyce-santos/person"
      )

      .then((response) => {
        setPerfil(response.data.profile);
      })
      .catch((error) => {
        window.alert("Show de erro");
      });
  };

  const escolherPerfil = () => {
    const body = {
      id: perfil.id,
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joyce-santos/choose-person",
        body
      )

      .then((response) => {
        escolherPessoa();
        console.log("deu bom");
      })
      .catch((error) => {
        window.alert("Erro de escolha");
      });
  };

  const onClickCurti = () => {
    setEscolhePerfil(true)
    escolherPerfil()
    console.log("SouTrue")

  }

  const onClickNaoCurti = () => {
    setEscolhePerfil(false)
    escolherPerfil()
    console.log("SouFalse")

  };

 

  return (
    <div>
      <h1>Astromatch</h1>
      <div>
        <Imagem img src={perfil.photo} />
        <p>{perfil.name}</p>
        <p>{perfil.age}</p>
        <p>{perfil.bio}</p>
        <button onClick={onClickNaoCurti}> X </button>
        <button onClick={onClickCurti}> ♥ </button>
      </div>
      <p>TELA DE PERFIS</p>
    </div>
  );
}

export default TelaPerfil;
