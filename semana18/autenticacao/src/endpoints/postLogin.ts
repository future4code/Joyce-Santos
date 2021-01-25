import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateId } from "../util/generateId";
import { generateToken } from "../util/generateToken";

export async function postLogin(req: Request, res: Response) {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    if (!userData.email || !userData.password) {
      throw new Error("Falha no login, verifique suas credenciais.");
    }
    if (userData.email.indexOf("@") === -1) {
      throw new Error("Email inválido.");
    }

    const user = await selectUserByEmail(userData.email);
    if (!user) {
      throw new Error("Usuário não encontrado.");
    }
    // const id = generateId();

    const token = generateToken({ id: user.id });

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
