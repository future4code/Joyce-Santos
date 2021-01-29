import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/loginUser";
import { generateToken } from "../services/generateToken";
import { loginInput } from "../types/user";

export async function login(req: Request, res: Response) {
let errorCode = 400;

  try {
    const userData: loginInput = {
      email: req.body.email,
      password: req.body.password,
    };

    if (!userData.email || !userData.password) {
      errorCode = 401
      throw new Error("Falha no login, verifique suas credenciais.");
    }

    if (userData.email.indexOf("@") === -1) {
      throw new Error("Insira um email válido.");
    }

    const userLogin = await selectUserByEmail(userData.email);

    if (!userLogin) {
      errorCode = 404;
      throw new Error("Usuário não encontrado.");
    }

    const compareResult = await compare(userData.password, userLogin.password);

    if (!compareResult) {
      errorCode = 401;
      throw new Error("Senha inválida.");
    }

    const token = generateToken({
      id: userLogin.id,
      role: userLogin.role,
    });

    res.status(200).send({ token });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
}
