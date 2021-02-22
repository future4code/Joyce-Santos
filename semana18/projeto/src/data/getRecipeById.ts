import { connection } from "../index";
import { recipes } from "../types/recipes";

const userTableRecipes = "recipes";


export const getRecipeById = async (id: string): Promise<recipes> =>{
    const result = await connection
    .select("*")
    .from(userTableRecipes)
    .where({id})

    return result[0]
}