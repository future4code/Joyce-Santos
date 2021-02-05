import { Request, Response } from "express";
import { signupInputDTO } from "../business/entities/user";
import { businessLogin, businessSignup } from "../business/userBusiness";

export const signup = async (req: Request, res: Response) => {
  try {

    const { name, email, password } = req.body;

    const input: signupInputDTO = {
      name: name,
      email: email,
      password: password
    }

    let message = "Sucess!"

    const token = await businessSignup(input);

    res.status(201).send({ message: "Usuário criado com sucesso!", token });
    
  } catch (error) {
    res.statusCode = 400;
    let message = error.sqlMessage || error.message;

    res.send({ message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {

    const user = { email: req.body.email, password: req.body.password };

    const token = await businessLogin(user);

    res.status(200).send({ message: "Usuário logado!", token });

  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};
