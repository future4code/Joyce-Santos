import axios from 'axios'
import {baseUrl} from "../constants/constants"
import {goToFeed} from "../routers/coordinator"


export const login = (body, history ) =>{

    axios.post(`${baseUrl}/login`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        goToFeed(history)
    }).catch(error =>{
        alert("Algo errado não está certo, verifique seu e-mail ou senha!")
        console.log(error.message)
    })
}


export const signUp = (body, history) => {
  axios
    .post(`${baseUrl}/signup`, body)

    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToFeed(history);
    })

    .catch((error) => {
      console.log(error.message);
    });
};
