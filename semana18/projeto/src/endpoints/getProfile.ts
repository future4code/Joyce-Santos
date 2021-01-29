import { Request, Response } from "express";
import { getData } from "../services/generateToken";
import { getUserById } from "../data/searchProfile";

export async function getProfileByToken(req: Request, res: Response) {
  let errorCode = 400;

  try {
    const token = req.headers.authorization as string;

    const authenticationData = getData(token)

    const user = await getUserById(authenticationData.id)

    if(!user){
      errorCode = 401;
      throw new Error("Usuário não autorizado!");
      
    }

    res.status(200).send({
        id: user.id,
        name: user.name,
        email: user.email
    })
  } catch (error) {
      res.status(400).send({message: error.message})
  }
}
