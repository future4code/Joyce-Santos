import { Request, Response } from "express";
import { getData } from "../services/generateToken";
import { searchProfile } from "../data/searchProfile";

export async function getProfileByToken(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;

    const AuthenticationData = getData(token)

    const user = await searchProfile(AuthenticationData.id)

    res.status(200).send({
        id: user.id,
        name: user.name,
        email: user.email
    })
  } catch (error) {
      res.status(400).send({message: error.message})
  }
}
