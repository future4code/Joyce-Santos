import { insertUseData, selectUseryEmail } from "../data/userDatabase";
import { generateToken } from "./services/authenticatos";
import { hash } from "./services/hashManager";
import {generateId} from "./services/idGenerator"
import {response} from "express"
import { loginInputDTO, signupInputDTO, User } from "./entities/user";
import { compare } from "bcryptjs";

export const businessSignup = async (
   input: signupInputDTO
) =>{
        let message = "Success!";

        if (!input.name || !input.email || !input.password) {
          response.statusCode = 406;
          message = '"name", "email" and "password" must be provided';
          throw new Error(message);
        }
        
        const id: string = generateId();
        const cypherPassword = await hash(input.password);

        await insertUseData(id, input.name, input.email, cypherPassword);

        const token: string = generateToken({ id });

        return ({token})

}

export const businessLogin = async (
  input: loginInputDTO
) =>{
   let message = "Success!";

  if (!input.email || !input.password) {
    response.statusCode = 406;
    message = '"email" and "password" must be provided';
    throw new Error(message);
  }

  const queryResult: any = await selectUseryEmail(input.email);

  if (!queryResult[0]) {
    response.statusCode = 401;
    message = "Invalid credentials";
    throw new Error(message);
  }

  const user: User = {
    id: queryResult[0].id,
    name: queryResult[0].name,
    email: queryResult[0].email,
    password: queryResult[0].password,
  };

  const passwordIsCorrect: boolean = await compare(
    input.password,
    user.password
  );

  if (!passwordIsCorrect) {
    response.statusCode = 401;
    message = "Invalid credentials";
    throw new Error(message);
  }

  const token: string = generateToken({
    id: user.id,
  });

  return {message, token}

}
