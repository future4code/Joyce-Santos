import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/generateToken"

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

    const compareResult = await compare(
        userData.password,
        user.password
    );

    if(!compareResult){
        throw new Error("Senha inválida.");
        
    }
    const token = generateToken({
        id: user.id,
        role: user.role
    })
   

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
