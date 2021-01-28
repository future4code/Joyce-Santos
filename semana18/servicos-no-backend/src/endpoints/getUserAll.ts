import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { getData } from "../services/generateToken";

export async function getUserAll(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;

    const authenticationData = getData(token);

    const user = await selectUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
