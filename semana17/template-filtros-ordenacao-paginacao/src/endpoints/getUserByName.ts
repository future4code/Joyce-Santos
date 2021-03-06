import { Request, Response } from "express";
import searchUsers from "../data/searchUsers";


export const getUserByName = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {

    const userName = req.query.name as string;
    const users = await searchUsers(userName);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("Nenhum usuário encontrado!");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
