import { Request, Response } from "express";
import searchByType from "../data/searchByType";

export const getUserByType = async (req: Request, res: Response): Promise<any> =>{
    try {

        const type = req.params.type as string;
        const users = await searchByType(type)

        res.status(200).send(users)    
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}