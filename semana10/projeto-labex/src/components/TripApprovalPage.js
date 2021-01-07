import { React, useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {
  Header,
  ButtonHeader,
  DivH1Header,
  DivContainerList,
  H2Home,
  Image,
} from "./styled";
import check from "./img/check.png";
import cross from "./img/cross.png";
import { useProtectPage } from "./hooks/useProtectPage";

function TripDetailsPage() {
  const { id } = useParams();
  const [trip, setTrip] = useState();
  const history = useHistory();
  const [newCandidates, setNewCandidates] = useState([]);

  const goToHome = () => {
    history.push("/listaviagens");
  };

  useEffect(() => {
    getCandidates();
  }, []);

  useProtectPage();

  const getCandidates = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joyce-dumont/trip/${id}`,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setTrip(response.data.trip.name);
        setNewCandidates(response.data.trip.candidates);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const aceptCandidate = (decision, candidatesId) => {
    const body = {
      approve: decision,
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joyce-dumont/trips/${id}/candidates/${candidatesId}/decide/`,
        body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        if (decision) {
          alert("Parabéns! Você foi aprovado para viajar com a Labe-X");
        } else {
          alert("Que pena! Tente uma próxima vez! :( ");
        }
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  console.log(newCandidates)

  return (
    <DivContainerList>
      <Header>
        <DivH1Header>
          <h1>Labe-X</h1>
        </DivH1Header>

        <ButtonHeader onClick={goToHome}> Voltar para Home </ButtonHeader>
      </Header>
      <H2Home>Aqui você pode gerenciar as inscrições para suas viagens</H2Home>

      <h3>{trip}</h3>

      <div>
        {newCandidates.length === 0 ? (
          <p>Nenhum Candidato Inscrito! :'( </p>
        ) : (
          newCandidates.map((candidate) => {
            return (
              <div>
                <p>Nome do Candidato: {candidate.name}</p>
                <p>Idade: {candidate.age}</p>
                <p>Profissão: {candidate.profession}</p>
                <p>Texto de inscrição: {candidate.applicationText}</p>
                <p>País: {candidate.country}</p>

                <Image
                  img
                  src={check}
                  onClick={() => aceptCandidate(true, candidate.id)}
                />
                <Image
                  img
                  src={cross}
                  onClick={() => aceptCandidate(false, candidate.id)}
                />
              </div>
            );
          })
        )}
      </div>
    </DivContainerList>
  );
}

export default TripDetailsPage;
