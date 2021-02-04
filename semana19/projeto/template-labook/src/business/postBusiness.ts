import { response } from "express";
import { insertPostData, searchPostById } from "../data/postDatabase";
import { Post } from "./entities/post";
import { AuthenticationData } from "./entities/user";
import { getTokenData } from "./services/authenticatos";
import { generateId } from "./services/idGenerator";

export const businessCreatePost = async(
    photo: string,
    description: string,
    type: string,
    token: string
) => {

     let message = "Success!";

    const tokenData: AuthenticationData = getTokenData(token);
    const id: string = generateId();

    const result = await insertPostData(
        id, photo, description, type, tokenData.id
    )

    return message
}

export const businessGetPostById = async (id: string)=>{
   let message = "Success!";

   const queryResult: any = await searchPostById(id);

   if (!queryResult[0]) {
     response.statusCode = 404;
     message = "Post not found";
     throw new Error(message);
   }

   const post: Post = {
     id: queryResult[0].id,
     photo: queryResult[0].photo,
     description: queryResult[0].description,
     type: queryResult[0].type,
     createdAt: queryResult[0].created_at,
     authorId: queryResult[0].author_id,
   };

   return {message, post}

}

