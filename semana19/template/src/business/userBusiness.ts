import { request } from "express";
import { createUser } from "../data/userDataBase";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { ROLES } from "./entities/user";

export const businessSignup = async (
  name: string,
  email: string,
  password: string,
  role: ROLES
) => {

  let statusCode = 400;

  if (!email || email.indexOf("@") === -1) {
    statusCode = 422;
    throw new Error("E-mail inválido");
  }

  if (!password || password.length < 6) {
    statusCode = 422;
    throw new Error("Senha inválida");
  }

  const id: string = generateId();
  const hashPassword = await hash(password);

  await createUser(id, name, email, hashPassword, role);

  const token = generateToken({
    id,
    role: role,
  });

  return token;
};
