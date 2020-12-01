import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToFeed, goToLogin } from "../routers/coordinator"

export const useProtectPage =()=>{
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem("token")

        if (!token){
            goToLogin(history)
        }else{
             goToFeed(history);

        }
           

    }, [history])
}