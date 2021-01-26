import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { createUser } from "../data/createUser"
import { generateId } from "../util/generateId";
import { generateToken } from "../util/generateToken";

export async function postUser(req: Request, res: Response) {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("E-mail inválido");
    }
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Senha inválida");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = generateId();

    const cryptedPassword = await hash (userData.password);

    await createUser(id, userData.email, cryptedPassword);

    const token = generateToken({
      id: id,
      role: userData.role,
    });

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}
