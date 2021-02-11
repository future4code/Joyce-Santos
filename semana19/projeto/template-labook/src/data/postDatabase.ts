import { Post } from "../business/entities/post";
import {connection} from "./connection"

export const insertPostData = async (
   post: any
) =>{
    await connection("labook_posts")
         .insert(post)
}

export const searchPostById = async(id: string) =>{
    const result = await connection("labook_posts")
    .select("*")
    .where({ id });

    return result

}
