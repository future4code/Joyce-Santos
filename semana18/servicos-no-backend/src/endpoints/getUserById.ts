import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { getData } from "../services/generateToken";

export async function getUserById(req: Request, res: Response): Promise<void> {
  try {
    const token: string = req.headers.authorization!;

    const authenticationData = getData(token);

    if(authenticationData.role !== "normal"){
        throw new Error("Somente um usuário normal pode acessar essa funcionalidade");
        
    }

    const user = await selectUserById(authenticationData.id);

    res.status(200).send({ 
        id: user.id, 
        email: user.email,
     });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
