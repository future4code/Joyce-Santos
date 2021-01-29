import { Request, Response } from "express";
import { getRecipeById } from "../data/getRecipeById";
import { getUserById } from "../data/searchProfile";
import { getData } from "../services/generateToken";

export async function getRecipe(req: Request, res: Response) {
    let errorCode = 400;

    try {
        const {id} = req.params;
        const token = req.headers.authorization as string;
        const authenticationData = getData(token)

        const user = await getUserById(authenticationData.id)

        if(!user){
            errorCode = 401;
            throw new Error("Usuário não autorizado.");
        }

        const recipe = await getRecipeById(id)

        if(!recipe){
            errorCode = 404;
            throw new Error("Receita não encontrada");   
        }

        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            date: recipe.date
        })
        
    } catch (error) {
        res.status(errorCode).send(error.message)
        
    }
    
}