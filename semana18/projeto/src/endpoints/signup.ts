import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { hash } from "../services/generateHash";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { USER_ROLES } from "../types/user";

export async function signup(req: Request, res: Response) {
   let errorCode = 400;
  
  try {

        const id = generateId();
        
        if (
          !req.body.name ||
          !req.body.email ||
          !req.body.password ||
          !req.body.role
        ) {
          throw new Error(
            'Preencha todas as informações.'
          );
        }

        if(req.body.password < 6){
          errorCode = 401;
          throw new Error("A senha deve conter no mínimo 6 caracteres.");
          
        }

        if (
          req.body.role !== USER_ROLES.ADMIN &&
          req.body.role !== USER_ROLES.NORMAL
        ) {
          errorCode = 401;
          throw new Error(`"role" deve ser "NORMAL" ou "ADMIN"`);
        };

          if (req.body.role === "undefined") {
            req.body.role = "normal";
          }

        const hashPassword = await hash(req.body.password);

        const userData = {
            id:id,
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            role: req.body.role || "normal"
        };

        await createUser(userData);

        const token = generateToken({
            id: id,
            role: userData.role
        })

        res.status(200).send({token});
 
    } catch (error) {
        res.status(400).send({message: error.message})
        
    }
    
}