import { connection } from "../index";
import { recipes } from "../types/recipes";


const userTableRecipes = "recipes";

export const createRecipe = async (recipes: recipes): Promise<void> => {
  await connection
  .insert(recipes)
  .into(userTableRecipes);
};
