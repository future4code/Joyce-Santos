import { Request, Response } from "express";
import { getUserById } from "../data/searchProfile";
import { getData } from "../services/generateToken";

export async function getOtherUserProfile(req: Request, res: Response){
    let errorCode = 400;

    try {
        const {id} = req.params
        const token = req.headers.authorization as string
        const authenticationData = getData(token)

        const user = await getUserById(authenticationData.id)

        if(!user){
            errorCode = 401
            throw new Error("Usuário não autorizado");
        }

        const profile = await getUserById(id)

        res.status(200).send({
            id: profile.id,
            name: profile.name,
            email: profile.email
        })
        
    } catch (error) {
        res.status(errorCode).send(error.message)
        
    }
}