import { Request, Response } from "express";
import { createRecipe } from "../data/createRecipes";
import { getUserById } from "../data/searchProfile";
import { generateId } from "../services/generateId";
import { getData } from "../services/generateToken";
import { recipes } from "../types/recipes";



export async function postRecipe(req: Request, res: Response) {
    let errorCode = 400;

    try {
        const id = generateId();
        let today = new Date().toLocaleDateString()
        const token = req.headers.authorization as string

        const authenticationData = getData(token)

        const user = await getUserById(authenticationData.id)

        if(!user){
            errorCode = 401;
            throw new Error("Usuário não autorizado"); 
        }

        if(!req.body.title ||
           !req.body.description
        ){
                throw new Error("Preencha todos os campos"); 
            }
        const recipeData: recipes = {
            id: id,
            title: req.body.title,
            description: req.body.description,
            date: today,
            user_id: user.id
        }

        await createRecipe(recipeData)

        res.status(200).send("Receita criada com sucesso!")
        
    } catch (error) {
        res.status(errorCode).send(error.message)
        
    }
    
}