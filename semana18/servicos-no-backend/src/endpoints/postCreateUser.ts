import { hash } from "../services/generateHash";
import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { createUserAddress } from "../data/createAddress";
import { getAddeessByCep } from "../services/addressManager";
import { userAddress } from "../types/address";

export async function postUser(req: Request, res: Response) {
  try {
    const id = generateId();
    const idAddress = generateId();

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
      cep: req.body.cep,
      number: req.body.number,
      complement: req.body.complement,
    };

    if (req.body.role === "undefined") {
      req.body.role = "normal";
    }

    const hashPassword = await hash(userData.password);

    const addressInfo = await getAddeessByCep(userData.cep as string)

    const newAddress: userAddress = {
      id: idAddress,
      name: addressInfo.name,
      number: userData.number,
      neighborhood: addressInfo.neighborhood,
      complement: userData.complement,
      city: addressInfo.city,
      state: addressInfo.state,
      user_id: id
    };

    await createUser(id, userData.email, hashPassword, userData.role);
    await createUserAddress(newAddress)

   

    const token = generateToken({
      id: id,
      role: userData.role,
    });

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}
