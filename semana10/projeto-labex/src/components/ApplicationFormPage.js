import React from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {
  Header,
  ButtonHeader,
  DivH1Header,
  RegisterButton,
  DivContainer,
  DivRegister,
  H2Home
} from "./styled";
import {useForm} from "./hooks/useForm"
import { Countries } from "./Countries";


function ApplicationFormPage() {
  const history = useHistory()
  const {id} = useParams()

  const { form, onChange } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const onChangeInput = (event) =>{
    const {value, name} = event.target;
    onChange(value, name)
  }

   const goToHome = () => {
     history.push("/");
   };

   const onSubmitForm = (event) =>{
     event.preventDefault()
     userApplication()
     console.log(form.name);
     console.log(form.age);
     console.log(form.applicationText);
     console.log(form.profession);
     console.log(form.country);
  
   }

   
   const userApplication =(candidate) =>{
     axios.post(
       `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joyce-dumont/trips/${id}/apply`, form)
     .then((response)=>{
       alert("Parabéns! Inscrição realizada com sucesso")
       console.log("Passou pelo Then")
     })
     .catch((error)=>{
       alert(error.message)
       console.log("Caiu no erro")
     })

   }

  return (
    <DivContainer>
      <Header>
        <DivH1Header>
          <h1>Labe-X</h1>
        </DivH1Header>

        <ButtonHeader onClick={goToHome}>Voltar</ButtonHeader>
      </Header>

      <H2Home>Inscreva-se para viajar conosco!</H2Home>
      <DivRegister>
        <form onSubmit={onSubmitForm}>
          <label>Nome:</label>
          <input
            value={form.name}
            onChange={onChangeInput}
            name={"name"}
            type="text"
            pattern={"[A-Za-z ]{3,}"}
            required
          />
          <label>Idade:</label>
          <input
            value={form.age}
            onChange={onChangeInput}
            name={"age"}
            type="number"
            min={18}
            required
          />
          <label>Por que você merece viajar com a Labe-X?:</label>
          <input
            value={form.applicationText}
            onChange={onChangeInput}
            name={"applicationText"}
            type="text"
            pattern={"[A-Za-z ]{30,}"}
            required
          />
          <label>Profissão</label>
          <input
            value={form.profession}
            onChange={onChangeInput}
            name={"profession"}
            type="text"
            pattern={"[A-Za-z ]{10,}"}
            required
          />
          <label>País:</label>
          <Countries onChangeInput={onChangeInput} country={form.country} />  
          <RegisterButton>Enviar Inscrição</RegisterButton>
        </form>
      </DivRegister>
    </DivContainer>
  );
 
}

export default ApplicationFormPage;
