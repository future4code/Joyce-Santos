import { Request, Response } from "express";
import { businessSignup } from "../business/userBusiness";

export const signup = async(
req: Request, res: Response
) =>{
    try {
        const {name, email, password, role} = req.body
        const token = await businessSignup(
            name,
            email,
            password,
            role
        )

        res.status(200).send({message: "Usuário criado com sucesso!", token})
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}