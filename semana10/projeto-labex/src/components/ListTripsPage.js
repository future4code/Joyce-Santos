import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Header,
  ButtonHeader,
  DivH1Header,
  H2Home,
  SubscribeButton,
  DivContainerList,
} from "./styled";

function ListTripsPage() {
  const history = useHistory();
  const [trips, setTrips] = useState([]);

  const goToHome = () => {
    history.push("/");
  };

   const goToFormPage = (id) => {
     history.push(`/formulario/${id}`)
   };
 

  useEffect(() => {
    getTrips();
  }, []);

 

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/joyce-dumont/trips"
      )
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <DivContainerList>
      <Header>
        <DivH1Header>
          <h1>Labe-X</h1>
        </DivH1Header>

        <ButtonHeader onClick={goToHome}> Voltar para Home </ButtonHeader>
      </Header>
      <H2Home>Lista das Viagens Disponíveis</H2Home>

      {trips.length === 0 ? (
        <p>Loading...</p>
      ) : (
        trips.map((trip) => (
          <div>
            <p>Nome: {trip.name}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Data da viagem:{trip.date}</p>
            <p>Duração da Viagem:{trip.durationInDays} dias </p>
            <p>Descrição da Viagem: {trip.description} </p>

            <SubscribeButton onClick={() => goToFormPage(trip.id)}>
              Inscreva-se{" "}
            </SubscribeButton>
          </div>
        ))
      )}
    </DivContainerList>
  );
}

export default ListTripsPage;
