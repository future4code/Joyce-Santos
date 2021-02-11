import { response } from "express";
import { insertPostData, searchPostById } from "../data/postDatabase";
import { createTaskInputDTO, Post } from "./entities/post";
import { AuthenticationData } from "./entities/user";
import { getTokenData } from "./services/authenticatos";
import { generateId } from "./services/idGenerator";

export const businessCreatePost = async(
    input: createTaskInputDTO
): Promise<any> => {

  const tokenData: AuthenticationData = getTokenData(input.token);
  const id: string = generateId();
     
       const newPost = {
         id: id, 
         photo: input.photo,
         description: input.description,
         type: input.type,
         author_id: tokenData.id
         
       }
       
       await insertPostData(newPost);

}

export const businessGetPostById = async (id: string)=>{
   let message = "Success!";

   const queryResult: any = await searchPostById(id);

   if (!queryResult[0]) {
          message = "Post not found";
     throw new Error(message);
   }

   const post: any = {
     id: queryResult[0].id,
     photo: queryResult[0].photo,
     description: queryResult[0].description,
     type: queryResult[0].type,
     createdAt: queryResult[0].created_at,
     authorId: queryResult[0].author_id,
   };

   return {message, post}

}

