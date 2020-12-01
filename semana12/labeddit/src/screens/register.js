import React from "react";
import { useHistory } from "react-router-dom";
import {  signUp } from "../constants/user";
import { useForm } from "../hooks/useForm";


function RegisterPage() {
  const history = useHistory();
  const { form, onChange } = useForm({ email: "", password: "" , username: ""});

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(form, history);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          name="username"
          value={form.username}
          onChange={handleInputChange}
        />

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
    </div>
  );
}

export default RegisterPage;
