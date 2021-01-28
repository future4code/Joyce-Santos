import { Request, Response } from "express";
import { getData } from "../services/generateToken";
import {deleteUserById} from "../data/deleteUserById"

export async function deleteUser(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string;
        const authenticationData = getData(token);

        if(authenticationData.role !== "admin"){
            throw new Error("Somente admins podem deletar um usuário");
        }

        const id = req.params.id;

        await deleteUserById(id);
        res.status(200).send("Usuário deletado com sucesso")
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
    
}