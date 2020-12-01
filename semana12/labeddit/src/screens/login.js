import React from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../constants/user';
import {goToSignUp} from '../routers/coordinator'
import {useForm} from '../hooks/useForm'
import {ButtonSignUp} from "../styled/styled"



function LoginPage() {
  const history = useHistory()
  const {form, onChange} = useForm({email: "", password: ""})

  const handleInputChange = (event) => {
    const {value, name} = event.target

    onChange(value, name)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    login(form, history)

  } 


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={handleInputChange}
        />

        <button> Login </button>
      </form>

      <ButtonSignUp onClick={() => goToSignUp(history)}>
        {" "}
        Ainda não faz parte do LabEddit? Cadastre-se!
      </ButtonSignUp>
    </div>
  );
}

export default LoginPage;