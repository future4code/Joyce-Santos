import {React, useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Header, ButtonHeader, DivH1Header, DivContainer, H2Home, Image } from "./styled";
import check from "./img/check.png"
import cross from "./img/cross.png"
import {useProtectPage} from "./hooks/useProtectPage" 

function TripDetailsPage() {
  const {id} = useParams();
  const [trip, setTrip] = useState();
  const [application, setApplication] = useState()
  const history = useHistory()
  
   const goToHome = () => {
     history.push("/homeadm");
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
              setApplication(response.data.trip.candidates);
              console.log("Entrou no then")
            })
            .catch((error) => {
              console.log(error.message);
              console.log("Caiu no erro de novo mano!")
            });
   };

   const aceptCandidate = (candidateId) => {
      const body = {
       approve: true,
     };
     axios
       .put(
         `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joyce-dumont/trips/${id}/candidates/${candidateId}/decide/`,
         body,{
           headers:{
             auth: localStorage.getItem("token")
           }
         }
       )
       .then((response) => {
         alert("Parabéns! Você foi aprovado para viajar com a Labe-X");
       })
       .catch((error) => {
         console.log(error.message);
       });
   };
   const rejectCandidate = (candidateId) => {
      const body = {
       approve: false,
     };
     axios
       .put(
         `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joyce-dumont/trips/${id}/candidates/${candidateId}/decide/`,
         body,
         {
           headers:{
             auth: localStorage.getItem("token")
           }
          })
       .then(() => {
         alert("Que pena! Tente uma próxima vez! :( ");
       })
       .catch((error) => {
         console.log(error.message);
       });
   };

  
  return (
    <DivContainer>
      <Header>
        <DivH1Header>
          <h1>Labe-X</h1>
        </DivH1Header>

        <ButtonHeader onClick={goToHome}> Voltar para Home </ButtonHeader>
      </Header>
      <H2Home>Aqui você pode gerenciar as inscrições para suas viagens</H2Home>

      <h3>{trip}</h3>

      <div>

       {getCandidates.length === 0 ? (<p>Nenhum Candidato! :'( </p>) : getCandidates.map = (candidate) => {
          return (
            <div>
                  <p>
                    Olá!, meu nome é {candidate.name}, tenho {candidate.age}{" "}
                    anos e minha profissão é {candidate.profession}, e moro no{" "}
                    {candidate.country} mereço participar das viagens com a
                    Labe-X porquê {candidate.applicationText}
                  </p>
              
                <Image
                  img
                  src={check}
                  onClick={() => aceptCandidate(candidate.id)}
                />
                <Image
                  img
                  src={cross}
                  onClick={() => rejectCandidate(candidate.id)}
                />
              
            </div>
          );
          }}
      </div>
    </DivContainer>
  ); 
}

export default TripDetailsPage;
