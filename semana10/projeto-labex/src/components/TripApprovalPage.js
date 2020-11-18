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
              `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joyce-santos/trip/${id}`,
              {
                headers: {
                  Authentication: localStorage.getItem("token"),
                },
              }
            )
            .then((response) => {
              setTrip(response.data.trip.name);
              setApplication(response.data.trip.candidates);
            })
            .catch((error) => {
              console.log(error.message);
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
             Authentication: localStorage.getItem("token")
           }
         }
       )
       .then(() => {
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
             Authentication: localStorage.getItem("token")
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
          return(
            <div>
              <ol>
                  <li>
                        <p>Nome do Candidato: {candidate.name}</p>
                        <p>Idade:{candidate.age}</p>
                        <p>Profissão: {candidate.profession}</p>
                        <p>Texto de inscrição: {candidate.applicationText}</p>
                        <p>País:{candidate.country}</p>
                  </li>
                        <Image img src={check} onClick={()=>aceptCandidate(candidate.id)} />
                        <Image img src={cross} onClick={()=>rejectCandidate(candidate.id)} />
                 
              </ol> 
            </div>)
          }}
      </div>
    </DivContainer>
  ); 
}

export default TripDetailsPage;
