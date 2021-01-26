import { hash } from "../util/generateHash";
import { Request, Response } from "express";
import { createUser } from "../data/createUser";
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
      role: req.body.role,
    };

    if(req.body.role === "undefined"){
      req.body.role = "normal"
    }

    const id = generateId();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword, userData.role);

    const token = generateToken({
      id: id,
      role: userData.role,
    });

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}
